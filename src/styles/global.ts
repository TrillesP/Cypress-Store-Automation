import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
}

body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialised;
}

header, h3 {
  font-family: 'Baloo 2';
  font-weight: 400;
  font-size: 1.125rem;
}

border-style, input-security, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 20px;
}

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
}
`
