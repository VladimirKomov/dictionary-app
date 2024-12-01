import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
    }

    #root {
        max-width: 800px; /* Максимальная ширина */
        width: 100%; /* Занимает всю ширину экрана, если меньше max-width */
        margin: 0 auto; /* Центрирование контента */
        padding: 20px; /* Отступы внутри */
        display: flex;
        flex-direction: column;
        position: relative; /* Для размещения других элементов */
    }
`;

