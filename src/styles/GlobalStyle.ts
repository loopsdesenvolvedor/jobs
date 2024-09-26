import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    font-weight: 300;
    color: #333;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after{
    box-sizing: inherit;
  }

  body{
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
