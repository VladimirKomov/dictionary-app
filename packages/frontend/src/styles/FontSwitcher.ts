import styled from "styled-components";

export const Select = styled.select`
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.border || "#ccc"};
    background-color: ${({ theme }) => theme.backgroundInput || "#f4f4f4"};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.primary || "#8A2BE2"};
        box-shadow: 0 0 5px ${({ theme }) => theme.primary || "#8A2BE2"};
    }
`;
