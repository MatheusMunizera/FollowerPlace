const fs = require('fs')
const { optimize } = require('svgo')
const Room = require('./room')
const Players = require('./players')

class Game {
  constructor({ followers, width = 830, height = 400 } = {}) {
    this.svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" shape-rendering="crispEdges">`
    this.styles = '<style>'
    this.room = new Room({ room: 'room1' })
    this.players = new Players({ room: 'room1', followers })
    this.elements = []
  }

  run() {
    this.setDefaultStyles()
    this.elements = [
      this.room.run(),
      this.players.run()
    ]

    const style = this.elements.map((element) => element.styles).flat().join("\n")
    this.styles += style

    const svgElement = this.elements.map((element) => element.svgElements).flat().join("\n")
    this.svg += svgElement

    return this.generate()
  }

  generate() {
    this.styles += '</style>'
    this.svg += this.styles
    this.svg += '</svg>'

    const result = optimize(this.svg, {
      path: '../game.svg',
      reusePaths: true,
      multipass: true
    });
    return result.data
  }

  setDefaultStyles() {
    this.styles += `
      .disable-pointer-events {
        pointer-events: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `
  }
}

module.exports = Game
