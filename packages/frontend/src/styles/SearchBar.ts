import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 0 1rem;
    width: 100%;
`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundInput || "#F4F4F4"};
    border: 1px solid ${({ theme }) => theme.border || "#E0E0E0"};
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    transition: border 0.3s ease;

    &:focus-within {
        border: 1px solid ${({ theme }) => theme.primary || "#8A2BE2"};
    }
`;

export const Input = styled.input`
    flex: 1;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    background: transparent;

    &::placeholder {
        color: #A0A0A0;
    }

    &:focus {
        outline: none;
    }
`;

export const SearchButton = styled.button`
    background-color: ${({ theme }) => theme.background};
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;

    img {
        width: 20px;
        height: 20px;
    }
`;
