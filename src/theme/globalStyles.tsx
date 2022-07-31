import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  @media (min-width: 425px) {
    html {
      font-size: 20px;
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Plus Jakarta Sans";
    text-align: center;
  }
  h1, h2, h3 {
    margin: 0;
  }
  p {
    line-height: 21px;
  }
`;

export default GlobalStyle;
