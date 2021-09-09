import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap');
    ${ reset }

    :root {
        font-family: 'Nunito Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
    }

    button {
        &:hover {
            cursor: pointer;
        }
    }
`

export default GlobalStyle;