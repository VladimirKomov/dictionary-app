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
        font-family: ${({ theme }) => theme.fontFamily};
        transition: background-color 0.3s ease, color 0.3s ease, font-family 0.3s ease;
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

