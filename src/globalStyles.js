// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Lato, Sans-Serif;
  }
  a {
    color: #350625;
    border: none;
    text-decoration: none;
  }
`;

export default GlobalStyle;
