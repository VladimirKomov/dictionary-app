import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Arial', sans-serif;
        transition: all 0.3s linear;
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 100vh;
        padding: 2rem;

        /* size */
        @media (max-width: 1200px) {
            padding: 1.5rem;
        }

        @media (max-width: 768px) {
            padding: 1rem;
        }

        @media (max-width: 480px) {
            padding: 0.5rem;
        }
    }

    button {
        cursor: pointer;
    }
`;

