const right_E_S = ({ reverse = false } = {}) => {
  const translate = reverse ? '9 28' : '25 28'
  const scale = reverse ? '-1 1' : '1 1'
  return `
  <g id="rightArm" transform='translate(${translate}) scale(${scale})'>
    <path stroke="$color-0" d="M1 0h1M2 1h1M3 2h1M3 3h1M4 4h1M4 5h1M4 6h1M4 7h1M4 8h1M1 9h1M4 9h1M1 10h1M4 10h1M1 11h1M4 11h1M1 12h1M4 12h1M1 13h1M4 13h1M1 14h1M4 14h1M1 15h1M4 15h1M1 16h1M4 16h1M1 17h1M4 17h1M1 18h1M4 18h1M1 19h1M4 19h1M1 20h1M4 20h1M1 21h1M4 21h1M0 22h1M2 22h1M4 22h1M0 23h1M2 23h1M4 23h1M0 24h2M4 24h1M1 25h1M3 25h1M1 26h2" />
    <path stroke="$color-1" d="M0 1h2M0 2h3M0 3h3M0 4h4M0 5h4M0 6h4M0 7h4M0 8h4M2 9h2M2 10h2M2 11h2M2 12h2M2 13h2M2 14h2M2 15h2M2 16h2M2 17h2M2 18h2M2 19h2M2 20h2M2 21h2M3 22h1M3 23h1M2 24h1" />
    <path stroke="$color-3" d="M1 22h1" />
    <path stroke="$color-2" d="M1 23h1M3 24h1M2 25h1" />
  </g>
  `
}

const left_E_S = ({ reverse = false } = {}) => {
  const translate = reverse ? '34 31' : '0 31'
  const scale = reverse ? '-1 1' : '1 1'
  return `
  <g id="idleLeft" transform='translate(${translate}) scale(${scale})'>
    <path stroke="$color-0" d="M3 0h1M2 1h1M2 2h1M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1M8 7h1M1 8h1M7 8h1M1 9h1M7 9h1M1 10h1M7 10h1M1 11h1M7 11h1M1 12h1M7 12h1M1 13h1M7 13h1M1 14h1M7 14h1M1 15h1M7 15h1M1 16h1M7 16h1M1 17h1M7 17h1M1 18h1M7 18h1M1 19h1M7 19h1M1 20h1M7 20h1M1 21h1M7 21h1M1 22h1M7 22h1M1 23h1M7 23h1M0 24h1M7 24h1M0 25h1M7 25h1M0 26h1M7 26h1M0 27h1M2 27h1M8 27h1M0 28h1M2 28h1M4 28h1M8 28h1M1 29h2M4 29h1M6 29h1M8 29h1M3 30h2M6 30h2M5 31h1M7 31h1M6 32h1" />
    <path stroke="$color-1" d="M4 0h3M3 1h5M3 2h6M3 3h6M3 4h6M3 5h6M3 6h6M3 7h4M3 8h3M3 9h3M3 10h3M3 11h3M3 12h3M3 13h3M3 14h3M3 15h3M3 16h3M3 17h3M3 18h3M3 19h3M3 20h3M3 21h3M3 22h3M2 23h4M2 24h4M1 25h5M1 26h6M1 27h1M3 27h1M5 27h2M3 28h1M5 28h1M7 28h1M5 29h1M7 29h1" />
    <path stroke="$color-4" d="M2 3h1M2 4h1M2 5h1M2 6h1M2 7h1M7 7h1M2 8h1M6 8h1M2 9h1M6 9h1M2 10h1M6 10h1M2 11h1M6 11h1M2 12h1M6 12h1M2 13h1M6 13h1M2 14h1M6 14h1M2 15h1M6 15h1M2 16h1M6 16h1M2 17h1M6 17h1M2 18h1M6 18h1M2 19h1M6 19h1M2 20h1M6 20h1M2 21h1M6 21h1M2 22h1M6 22h1M6 23h1M6 24h1M6 25h1M4 27h1M1 28h1M6 28h1M3 29h1M5 30h1M6 31h1" />
    <path stroke="$color-5" d="M1 24h1" />
    <path stroke="$color-3" d="M7 27h1" />
  </g>
  `
}

const right_N_W = ({ reverse = false } = {}) => {
  const translate = reverse ? '14 30' : '20 30'
  const scale = reverse ? '-1 1' : '1 1'
  return `
  <g id="rightArm" transform='translate(${translate}) scale(${scale})'>
    <path stroke="$color-0" d="M3 0h2M5 1h1M6 2h1M7 3h1M7 4h1M8 5h1M8 6h1M0 7h1M8 7h1M1 8h1M9 8h1M2 9h1M9 9h1M2 10h1M9 10h1M3 11h1M9 11h1M3 12h1M9 12h1M3 13h1M9 13h1M3 14h1M9 14h1M3 15h1M9 15h1M3 16h1M9 16h1M3 17h1M9 17h1M3 18h1M9 18h1M3 19h1M9 19h1M3 20h1M9 20h1M3 21h1M9 21h1M3 22h1M9 22h1M3 23h1M9 23h1M3 24h1M9 24h1M3 25h1M9 25h1M3 26h1M10 26h1M2 27h1M10 27h1M2 28h1M8 28h1M10 28h1M2 29h1M6 29h1M8 29h1M10 29h1M2 30h1M4 30h1M6 30h1M8 30h2M3 31h2M6 31h3M5 32h2" />
    <path stroke="$color-1" d="M2 1h1M1 2h4M0 3h6M0 4h7M0 5h7M0 6h8M2 7h6M3 8h5M4 9h4M4 10h4M5 11h3M5 12h3M5 13h3M5 14h3M5 15h3M5 16h3M5 17h3M5 18h3M5 19h3M5 20h3M5 21h3M5 22h3M5 23h3M5 24h3M5 25h4M5 26h5M3 27h7M3 28h3M7 28h1M9 28h1M3 29h1M5 29h1M7 29h1M3 30h1M5 30h1" />
    <path stroke="$color-2" d="M3 1h2M5 2h1M6 3h1M7 5h1M1 7h1M2 8h1M8 8h1M3 9h1M8 9h1M3 10h1M8 10h1M4 11h1M8 11h1M4 12h1M8 12h1M4 13h1M8 13h1M4 14h1M8 14h1M4 15h1M8 15h1M4 16h1M8 16h1M4 17h1M8 17h1M4 18h1M8 18h1M4 19h1M8 19h1M4 20h1M8 20h1M4 21h1M8 21h1M4 22h1M8 22h1M4 23h1M8 23h1M4 24h1M8 24h1M4 25h1M4 26h1M6 28h1M4 29h1" />
    <path stroke="$color-3" d="M9 29h1M7 30h1M5 31h1" />
  </g>
  `
}

const left_N_W = ({ reverse = false } = {}) => {
  const translate = reverse ? '33 29' : '1 29'
  const scale = reverse ? '-1 1' : '1 1'
  return `
  <g id="idleLeft" transform='translate(${translate}) scale(${scale})'>
    <path stroke="$color-0" d="M2 0h1M1 1h1M1 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M3 8h1M0 9h1M3 9h1M0 10h1M3 10h1M0 11h1M3 11h1M0 12h1M3 12h1M0 13h1M3 13h1M0 14h1M4 14h1M0 15h1M4 15h1M0 16h1M4 16h1M0 17h1M4 17h1M0 18h1M4 18h1M0 19h1M4 19h1M0 20h1M4 20h1M0 21h1M3 21h2M0 22h1M2 22h1M4 22h1M0 23h1M3 23h2M1 24h1M3 24h2M2 25h2" />
    <path stroke="$color-1" d="M2 1h2M2 2h2M1 3h3M1 4h3M1 5h3M1 6h3M1 7h3M1 8h2M1 9h2M1 10h2M1 11h2M1 12h2M1 13h2M1 14h3M1 15h3M1 16h3M1 17h3M1 18h3M1 19h3M1 20h3M1 21h1M1 22h1M2 23h1" />
    <path stroke="$color-3" d="M2 21h1" />
    <path stroke="$color-2" d="M3 22h1M1 23h1M2 24h1" />
  </g>
  `
}

module.exports = {
  nw: '',
  n: {
    left: left_N_W({ reverse: false }),
    right: right_N_W({ reverse: false })
  },
  ne: '',
  e: {
    left: left_E_S({ reverse: false }),
    right: right_E_S({ reverse: false })
  },
  se: '',
  s: {
    left: left_E_S({ reverse: true }),
    right: right_E_S({ reverse: true })
  },
  sw: '',
  w: {
    left: left_N_W({ reverse: true }),
    right: right_N_W({ reverse: true })
  },
}