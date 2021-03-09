import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b1b1b;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all .5s ease;
        font-family: 'Roboto', sans-serif;

        &:focus {
            outline: none;
        }

        &:hover {
            background: #23d997;
            color: #fff;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 3rem;
    }

    h3 {
        color: white;
    }

    h4 {
        font-size: 2rem;
        font-weight: bold;
    }

    a {
        font-size: 1.1rem;
    }

    span {
        font-weight: bold;
        color: #23d997;
    }

    p {
        color: #ccc;
        padding: 3rem 0;
        font-size: 1.4rem;
        line-height: 150%;
    }

`


export default GlobalStyle;