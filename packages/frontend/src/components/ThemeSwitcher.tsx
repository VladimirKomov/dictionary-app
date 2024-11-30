import React from 'react';
import styled from "styled-components";

const SwitchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`;

const Button = styled.button`
    background-color: ${({theme}) => theme.text};
    color: ${({theme}) => theme.background};
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 0.8;
    }
`;

interface ThemeSwitcherProps {
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, isDark }) => {

    return (
        <div>
            <button onClick={toggleTheme}>
                {isDark ? "Light" : "Dark"}
            </button>
        </div>
    )
};

export default ThemeSwitcher;
