import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    font-family: sans-serif;
  }
  
  body {
    padding: 30px;
    background-color: #000;
  }
`;
