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
body {
  height: 100%;
  width: 100%;
  background: black;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;
