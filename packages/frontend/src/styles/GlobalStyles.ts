import { createGlobalStyle } from 'styled-components';

export const GlobalStyles  = createGlobalStyle`
    :root {
        --background-light: #f5f5f5;
        --background-dark: #222;
        --text-light: #fff;
        --text-dark: #000;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s linear;
    }
`;