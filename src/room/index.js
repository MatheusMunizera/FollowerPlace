const { generateFloorTile, generateWallLeft, generateWallRight } = require('./roomImager')
const models = require('./models')
const { cartesianToIsometric } = require('./../utils')

class Room {
  constructor({ room = 'room1' } = {}) {
    this.model = models[room]
    this.styles = []
    this.svgElements = `<g id="room" transform="translate(${-32 + (this.model.length * 33)} ${this.model[0].length - 70})">`
    this.TILE_H = 32
    this.TILE_W = 64
  }

  run() {
    this.generate()

    this.svgElements += '</g>'
    return {
      svgElements: this.svgElements,
      styles: this.styles
    }
  }

  generate() {
    const wallLeft = generateWallLeft()
    const wallRight = generateWallRight()
    const wallDoorLeft = generateWallLeft({ height: 32 })
    const floorTile = generateFloorTile()
    this.svgElements += `<defs>`
    this.svgElements += `<g id="floorTile">${floorTile}</g>`
    this.svgElements += `<g id="wallLeft">${wallLeft}</g>`
    this.svgElements += `<g id="wallRight">${wallRight}</g>`
    this.svgElements += `<g id="wallDoorLeft">${wallDoorLeft}</g>`
    this.svgElements += `</defs>`
    for (const col in this.model) {
      const posY = parseInt(col)
      for (const row in this.model[posY]) {
        const posX = parseInt(row)
        const { x, y } = cartesianToIsometric({ x: posX, y: posY })
        if ((this.model[posY][posX] === 1 && this._isValidWallLeft({ posY, posX })) || this.model[posY][posX - 1] === 2) {
          if (this.model[posY][posX - 1] === 2) {
            this.svgElements += `<use xlink:href="#wallDoorLeft" x="${x - 8}" y="${y - 4}" />`
          } else {
            this.svgElements += `<use xlink:href="#wallLeft" x="${x - 8}" y="${y - 4}" />`
          }
        }

        if (this.model[posY][posX] === 1 && this._isValidWallRight({ posY, posX })) {
            this.svgElements += `<use xlink:href="#wallRight" x="${x + 8}" y="${y - 4}" />`
        }

        if (this.model[posY][posX]) {
          this.svgElements += `<use xlink:href="#floorTile" x="${x}" y="${y}" />`
        }
      }
    }
  }

  _isValidWallLeft({ posX, posY }) {
    return (this.model[posY][posX - 1] === 0 || this.model[posY][posX - 1] === undefined) &&
      (this.model[posY][posX - 2] === 0 || this.model[posY][posX - 2] === undefined) &&
      (this.model[posY][posX - 3] === 0 || this.model[posY][posX - 3] === undefined) &&
      (this.model[posY][posX - 4] === 0 || this.model[posY][posX - 4] === undefined) &&
      (this.model[posY][posX - 5] === 0 || this.model[posY][posX - 5] === undefined)
  }

  _isValidWallRight({ posX, posY }) {
    return ((!this.model[posY - 1]) || (this.model[posY - 1][posX] !== 1)) &&
      ((!this.model[posY - 2]) || (this.model[posY - 2][posX] !== 1)) &&
      ((!this.model[posY - 3]) || (this.model[posY - 3][posX] !== 1)) &&
      ((!this.model[posY - 4]) || (this.model[posY - 4][posX] !== 1)) &&
      ((!this.model[posY - 5]) || (this.model[posY - 5][posX] !== 1))
  }
}

module.exports = Room
