const { arms, bodys, heads, faces } = require('./models')

class PlayerImager {
  constructor({
    name,

    color = 'white',
    state = 'idle',
    direction = 'e'
  } = {}) {
    this.colosPallets = {
      white: [
        '#000000', // 0
        '#fefefe', // 1
        '#d7d7d7', // 2
        '#999999', // 3
        '#cdcdcd', // 4
        '#cccccc'  // 5
      ],
      beige: [
        '#000000', // 0
        '#feca97', // 1
        '#d7ab80', // 2
        '#997a5b', // 3
        '#cda37a', // 4
        '#cca27a'  // 5
      ]
    }

    this.name = name
    this.color = this.colosPallets[color]
    this.state = state
    this.direction = direction

    this.styles = []
    this.svgElements = `<g id="player">`
  }

  cartesianToIsometric({ x, y }) {
    return {
      x: (x * 64 / 2) - (y * 64 / 2),
      y: (x * 32 / 2) + (y * 32 / 2)
    }
  }

  setColor({ color, player }) {
    const colors = player.match(/\$color-\d/g)
    if (!colors) return player

    let changedPlayer = player
    for (const colorKey of colors) {
      const colorIndex = colorKey.replace('$color-', '')
      changedPlayer = changedPlayer.replace(colorKey, color[colorIndex])
    }
    return changedPlayer
  }

  run() {
    const svgElement = this.generate()
    this.svgElements += svgElement

    this.svgElements += '</g>'
    return this.svgElements
  }

  generate() {
    let player = ''
    player += bodys[this.state][this.direction]
    player += arms[this.direction].right
    player += heads[this.direction]
    player += arms[this.direction].left

    return this.setColor({ color: this.color, player })
  }
}

module.exports = PlayerImager
