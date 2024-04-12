const PlayerImager = require('./playerImager')
const roomModels = require('./../room/models')
const { cartesianToIsometric } = require('./../utils')

class Players {
  constructor({ room, followers = [] } = {}) {
    this.followers = followers
    this.model = roomModels[room]

    this.players = []
    this.styles = []
    this.svgElements = `<g id="players">`
  }

  run() {
    this.generate()

    this.players = this.players.sort((a, b) => (a.zIndex > b.zIndex) || (a.zIndex === b.zIndex) - 1)
    for (const { player } of this.players) {
      this.svgElements += player
    }

    this.svgElements += '</g>'
    return {
      svgElements: this.svgElements,
      styles: this.styles
    }
  }

  getAllPosiblePositions() {
    const positions = []
    for (const col in this.model) {
      const posY = parseInt(col)
      for (const row in this.model[posY]) {
        const posX = parseInt(row)
        if (this.model[posY][posX] === 1) {
          positions.push({ x: posX, y: posY })
        }
      }
    }

    return positions
  }

  generate() {
    this.svgElements += `<defs>`
    const playerES = new PlayerImager({ direction: 'e' }).run()
    this.svgElements += `<g id="playerES">${playerES}</g>`
    this.svgElements += `<use id="playerE" xlink:href="#playerES" transform='translate(0 0) scale(1 1)' />`
    this.svgElements += `<use id="playerS" xlink:href="#playerES" transform='translate(32 0) scale(-1 1)' />`

    const playerNW = new PlayerImager({ direction: 'n' }).run()
    this.svgElements += `<g id="playerNW">${playerNW}</g>`
    this.svgElements += `<use id="playerN" xlink:href="#playerNW" transform='translate(0 0) scale(1 1)' />`
    this.svgElements += `<use id="playerW" xlink:href="#playerNW" transform='translate(32 0) scale(-1 1)' />`
    this.svgElements += `</defs>`

    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const avaliablePositions = this.getAllPosiblePositions()
    const directions = ['n', 'e', 's', 'w']

    for (const name of this.followers) {
      const indexPosition = getRandom(0, avaliablePositions.length - 1)
      const { x, y } = avaliablePositions[indexPosition]
      const isoPostion = cartesianToIsometric({ x, y })
      avaliablePositions.splice(indexPosition, 1)

      const indexDirection = getRandom(0, directions.length - 1)
      const direction = directions[indexDirection]

      const player = `
        <use xlink:href="#player${direction.toUpperCase()}" x="${ isoPostion.x + 412 }" y="${ isoPostion.y + 12 }" />
        <text class="disable-pointer-events" x="${ isoPostion.x + 430 }" y="${ isoPostion.y }" text-anchor="middle" style="fill:rgb(0,0,0);font: 14px sans-serif;">${name}</text>
      `
      this.players.push({ zIndex: x + y, player })
    }
  }
}

module.exports = Players
