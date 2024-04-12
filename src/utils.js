const cartesianToIsometric = ({ x, y }) => {
  return {
    x: (x * 64 / 2) - (y * 64 / 2),
    y: (x * 32 / 2) + (y * 32 / 2)
  }
}

const isometricToCartesian = ({ x, y }) => {
  const cartesianX = (x + y * 2) / 2
  const cartesianY = x + cartesianX
  return {
    x: cartesianX,
    y: cartesianY
  }
}

module.exports = {
  cartesianToIsometric,
  isometricToCartesian
}
