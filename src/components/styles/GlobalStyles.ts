import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Josefin+Sans:ital,wght@0,400;0,500;1,300;1,700&family=Plus+Jakarta+Sans:wght@500;700&display=swap');

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
  body{
    width: 100%;
    background: ${(props: any) => props.theme.colors.background.secondary};
  }
`;
