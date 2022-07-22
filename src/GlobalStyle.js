import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

:root {
  --clr-main: #E9D5DA;
  --clr-text: #fff;
  --clr-body : #827397;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
a {
    text-decoration: none;
  }

  button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }


.navbar.colorChange{
	  box-shadow: 0 0.3rem 1.5rem rgba(109, 109, 109, 0.15) ;
}

`;

export default GlobalStyle;