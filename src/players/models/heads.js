const idle_E_S = ({ reverse = false } = {}) => {
  const translate = reverse ? '32 1' : '2 1'
  const scale = reverse ? '-1 1' : '1 1'
  return `
  <g id="isoIdle" transform='translate(${translate}) scale(${scale})'>
    <path stroke="$color-0" d="M8 0h7M5 1h3M15 1h3M4 2h1M18 2h2M3 3h1M20 3h1M2 4h1M21 4h1M1 5h1M22 5h1M1 6h1M22 6h1M0 7h1M23 7h1M0 8h1M23 8h1M0 9h1M24 9h1M0 10h1M24 10h1M0 11h1M24 11h1M0 12h1M24 12h1M0 13h1M24 13h1M0 14h1M24 14h1M0 15h1M3 15h1M24 15h1M1 16h2M24 16h1M1 17h2M4 17h1M24 17h1M2 18h1M4 18h1M24 18h1M2 19h1M4 19h1M24 19h1M3 20h1M24 20h1M3 21h1M24 21h1M4 22h1M24 22h1M4 23h1M24 23h1M5 24h1M23 24h1M5 25h1M8 25h1M23 25h1M9 26h1M23 26h1M10 27h1M22 27h1M11 28h1M21 28h1M12 29h2M19 29h2M14 30h5" />
    <path stroke="$color-1" d="M8 1h7M5 2h13M4 3h16M3 4h18M2 5h20M2 6h20M1 7h22M1 8h22M1 9h23M1 10h23M1 11h23M1 12h23M1 13h23M1 14h23M2 15h1M5 15h19M3 16h21M3 17h1M5 17h19M3 18h1M5 18h19M3 19h1M5 19h19M5 20h19M5 21h19M5 22h19M6 23h1M8 23h16M6 24h1M9 24h14M6 25h2M9 25h14M10 26h12M11 27h10M13 28h7" />
    <path stroke="$color-2" d="M1 15h1M4 15h1M4 20h1M4 21h1M5 23h1M7 23h1M8 24h1M22 26h1M21 27h1M12 28h1M20 28h1M14 29h5" />
    <path stroke="$color-3" d="M7 24h1" />
  </g>
  `
}

const idle_N_W = ({ reverse = false } = {}) => {
  const translate = reverse ? '32 1' : '2 1'
  const scale = reverse ? '-1 1' : '1 1'
  return `
  <g id="isoIdle" transform='translate(${translate}) scale(${scale})'>
    <path stroke="$color-0" d="M13 0h5M9 1h4M18 1h4M7 2h2M22 2h1M5 3h2M23 3h1M4 4h1M24 4h1M3 5h1M25 5h1M2 6h1M25 6h1M1 7h1M26 7h1M1 8h1M26 8h1M1 9h1M26 9h1M0 10h1M26 10h1M0 11h1M26 11h1M0 12h1M26 12h1M0 13h1M26 13h1M0 14h1M26 14h1M0 15h1M26 15h1M0 16h1M20 16h1M26 16h1M1 17h1M19 17h1M21 17h1M26 17h1M1 18h1M19 18h1M21 18h1M25 18h1M2 19h1M19 19h1M25 19h1M3 20h1M19 20h1M25 20h1M4 21h1M20 21h1M25 21h1M4 22h1M25 22h1M5 23h1M24 23h1M6 24h1M24 24h1M6 25h1M22 25h2M20 26h2M20 27h1" />
    <path stroke="$color-1" d="M13 1h5M9 2h13M7 3h16M5 4h19M4 5h21M3 6h22M2 7h24M2 8h24M2 9h24M1 10h25M1 11h25M1 12h25M1 13h25M1 14h25M1 15h25M2 16h18M21 16h5M3 17h16M20 17h1M22 17h4M4 18h15M20 18h1M22 18h3M5 19h14M20 19h5M7 20h12M20 20h5M9 21h10M21 21h4M20 22h5M19 23h5M18 24h6M8 25h2M15 25h7M7 26h13M11 27h8" />
    <path stroke="$color-2" d="M1 16h1M2 17h1M2 18h2M3 19h2M4 20h3M5 21h4M19 21h1M5 22h15M6 23h13M7 24h11M7 25h1M10 25h5M19 27h1" />
  </g>
  `
}

module.exports = {
  nw: '',
  n: idle_N_W({ reverse: false }),
  ne: '',
  e: idle_E_S({ reverse: false }),
  se: '',
  s: idle_E_S({ reverse: true }),
  sw: '',
  w: idle_N_W({ reverse: true }),
}
