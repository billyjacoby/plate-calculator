import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: green;

    ${"" /* Colors! */}
    --colorOne: #082032;
    --colorTwo: #2C394B;
    --colorThree: #334756;
    --colorFour: #FF4C29;

    --headerBGColor: #082032;
    --headerFontColor: #FF4C29;
  }

  html {
    font-family: Inter;
    font-weight: 400
  }
  body {
    background-color: var(--colorThree);
  }
`;

export default GlobalStyle;
