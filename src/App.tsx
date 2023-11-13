import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Top from "./pages/Top";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Top />
    </React.Fragment>
  );
}

export default App;
