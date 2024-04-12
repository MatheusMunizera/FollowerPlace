class RoomImager {
  generateFloorTile({ height = 128, thickness = 7 } = {}) {
    const TILE_H = 32;
    const TILE_W = 64;

    const startX = 32;
    const startY = 0;
    const points = [
      {
        x: startX,
        y: startY + height
      },
      {
        x: startX - TILE_W / 2,
        y: startY + height + TILE_H / 2
      },
      {
        x: startX,
        y: startY + height + TILE_H
      },
      {
        x: startX + TILE_W / 2,
        y: startY + height + TILE_H / 2
      }
    ];

    let svgElement = ''
    const tileUp = [
      [points[0].x, points[0].y],
      [points[1].x, points[1].y],
      [points[2].x, points[2].y],
      [points[3].x, points[3].y],
      [points[0].x, points[0].y]
    ].join(' ')
    svgElement += `<polygon points="${tileUp}" style="fill:#989865"/>`
    const tileUpLine = [
      [points[0].x, points[0].y + 0.5],
      [points[1].x + 1, points[1].y],
      [points[2].x, points[2].y - 0.5],
      [points[3].x - 1, points[3].y],
      [points[0].x, points[0].y + 0.5]
    ].join(' ')
    svgElement += `<polygon points="${tileUpLine}" style="fill:none;stroke:#8e8e5e;opacity:0.5"/>`
    if (thickness > 0) {
      const tileLeft = [
        [points[1].x, points[1].y],
        [points[1].x, points[1].y + thickness],
        [points[2].x, points[2].y + thickness],
        [points[2].x, points[2].y]
      ].join(' ')
      svgElement += `<polygon points="${tileLeft}" style="fill:#838357"/>`
      const tileLeftLine = [
        [points[1].x + 0.5, points[1].y + 0.7],
        [points[1].x + 0.5, points[1].y + thickness - 0.4],
        [points[2].x - 0.5, points[2].y + thickness - 0.7],
        [points[2].x - 0.5, points[2].y + 0.4]
      ].join(' ')
      svgElement += `<polygon points="${tileLeftLine}" style="fill:none;stroke:#7A7A51;opacity:0.5"/>`

      const tileRight = [
        [points[3].x, points[3].y],
        [points[3].x, points[3].y + thickness],
        [points[2].x, points[2].y + thickness],
        [points[2].x, points[2].y]
      ].join(' ')
      svgElement += `<polygon points="${tileRight}" style="fill:#6F6F49"/>`
      const tileRightLine = [
        [points[3].x - 0.5, points[3].y + 0.7],
        [points[3].x - 0.5, points[3].y + thickness - 0.4],
        [points[2].x + 0.5, points[2].y + thickness - 0.7],
        [points[2].x + 0.5, points[2].y + 0.4]
      ].join(' ')
      svgElement += `<polygon points="${tileRightLine}" style="fill:none;stroke:#676744;opacity:0.5"/>`
    }

    return svgElement
  }

  generateWallLeft({ height = 128 } = {}) {
    const points = [
      {
        x: 32,
        y: 0
      },
      {
        x: 0,
        y: 16
      },
      {
        x: 8,
        y: 20
      },
      {
        x: 40,
        y: 4
      }
    ];

    let svgElement = ''
    const tileUp = [
      [points[0].x, points[0].y],
      [points[1].x, points[1].y],
      [points[2].x, points[2].y],
      [points[3].x, points[3].y],
      [points[0].x, points[0].y]
    ].join(' ')
    svgElement += `<polygon points="${tileUp}" style="fill:#70727a"/>`

    if (height > 0) {
      const tileLeft = [
        [points[1].x, points[1].y],
        [points[1].x, points[1].y + height],
        [points[2].x, points[2].y + height],
        [points[2].x, points[2].y]

      ].join(' ')
      svgElement += `<polygon points="${tileLeft}" style="fill:#bbbecd"/>`

      const tileRight = [
        [points[3].x, points[3].y],
        [points[3].x, points[3].y + height],
        [points[2].x, points[2].y + height],
        [points[2].x, points[2].y]
      ].join(' ')
      svgElement += `<polygon points="${tileRight}" style="fill:#90929e"/>`
    }

    return svgElement
  }

  generateWallRight({ height = 128 } = {}) {
    const points = [
      {
        x: 8,
        y: 0
      },
      {
        x: 40,
        y: 16
      },
      {
        x: 32,
        y: 20
      },
      {
        x: 0,
        y: 4
      }
    ];

    let svgElement = ''
    const tileUp = [
      [points[0].x, points[0].y],
      [points[1].x, points[1].y],
      [points[2].x, points[2].y],
      [points[3].x, points[3].y],
      [points[0].x, points[0].y]
    ].join(' ')
    svgElement += `<polygon points="${tileUp}" style="fill:#70727a" transform="translate(24 0)"/>`

    if (height > 0) {
      const tileLeft = [
        [points[3].x, points[3].y],
        [points[3].x, points[3].y + height],
        [points[2].x, points[2].y + height],
        [points[2].x, points[2].y]
      ].join(' ')
      svgElement += `<polygon points="${tileLeft}" style="fill:#bbbecd" transform="translate(24 0)"/>`

      const tileRight = [
        [points[1].x, points[1].y],
        [points[1].x, points[1].y + height],
        [points[2].x, points[2].y + height],
        [points[2].x, points[2].y]
      ].join(' ')
      svgElement += `<polygon points="${tileRight}" style="fill:#90929e" transform="translate(24 0)"/>`
    }

    return svgElement
  }
}

module.exports = new RoomImager()
