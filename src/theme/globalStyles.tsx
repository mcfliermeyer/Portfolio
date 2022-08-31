import { createGlobalStyle } from "styled-components";

export interface MyTheme {
  colors: {
    primaryBlue: string;
    darkerBlue: string;
    primaryPinkish: string;
    darkerPinkish: string;
    primaryYellow: string;
    darkerYellow: string;
    primaryPurple: string;
    darkerPurple: string;
  };
}

const GlobalStyle = createGlobalStyle<{theme: MyTheme}>`
  html {
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
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
//no side scrolling overflow hidden
    overflow-x: hidden;
  }
  h1, h2, h3 {
    margin: 0;
  }
  p {
    line-height: 21px;
    max-width: 700px;
    margin-inline: auto;

  }
  @media (min-width: 425px) {
    p {
      //increase line height for large screen
      line-height: 30px;
    }
  }
`;

export default GlobalStyle;
