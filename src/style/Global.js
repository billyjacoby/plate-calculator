import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Button = styled.button`
  font-size: ${(props) => (props.small ? "12px" : "24px")};
  min-width: ${(props) => (props.small ? "2rem" : "3rem")};
  min-height: ${(props) => (props.small ? "2rem" : "3rem")};
  padding: 10px;
  border-radius: 15px;
  margin: 10px;

  background-color: var(--colorFour);
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: green;

    ${"" /* Colors! */}
    --colorOne: #082032;
    --colorTwo: #2C394B;
    --colorThree: #334756;
    --colorFour: #FF4C29;
    --colorFive: #f4f4f4;

    --headerBGColor: #082032;
    --headerFontColor: #FF4C29;
  }

  html {
    font-family: Inter;
    font-weight: 400;
    color: var(--colorFive);
  }
  body {
    background-color: var(--colorThree);
  }
`;

export default GlobalStyle;
