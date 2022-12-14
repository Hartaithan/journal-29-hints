import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  color: white;
  box-sizing: border-box;
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
  padding: 24px 0;
  flex: 1 1 auto;
}

button {
  border: none;
  outline: none;
}
`;

export default GlobalStyle;
