import {createGlobalStyle} from 'styled-components';

// noinspection CssUnknownTarget
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap&subset=latin-ext');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }
  
  button::-moz-focus-inner {
    border: 0;
  }

`;

export default GlobalStyle;