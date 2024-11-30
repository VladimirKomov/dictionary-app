import styled from "styled-components";

export const Styles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text};
    transition: all 0.3s ease;
`;

export const StyledButton = styled.button`
    background-color: ${({theme}) => theme.text};
    color: ${({theme}) => theme.background};
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
    }
    
    &:focus {
        outline: none;
    }
`;