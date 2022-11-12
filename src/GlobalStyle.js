import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
 padding:0;
     margin:0;
  box-sizing: border-box;
}

scroll-behavior: smooth;
:root {
  --clr-main: #E9D5DA;
  --clr-text: #fff;
  --clr-body : #827397;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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


.slidein {
  animation: slidein 3s ;
  


@keyframes slidein {
  0% {
    visibility: hidden;
    margin-top: 3rem;
    opacity: 0;
  }
  95% {
    visibility: visible;
    margin-top: 0;
    opacity:1;
  }
}
}



@media screen and (max-width:500px){
  html {
    font-size: 10px;
  }

 }

`;

export default GlobalStyle;
