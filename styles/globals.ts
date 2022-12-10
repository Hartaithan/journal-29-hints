import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  color: white;
  box-sizing: border-box;
  font-family: inherit;
  font-style: inherit;
}

html,
body,
#__next {
  height: 100%;
  width: 100%;
  background: black;
}

#__next {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
  overflow: auto;
}
`;

export default GlobalStyle;
