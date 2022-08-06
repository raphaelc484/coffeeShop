import { createGlobalStyle } from 'styled-components'
import backgroundImg from '../assets/Background.svg'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
  }
  body {
    /* background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover; */

    background:${(props) => props.theme.white} ;
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  body,input,textarea,button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem
  }
`
