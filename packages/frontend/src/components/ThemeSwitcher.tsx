import React from 'react';
import MoonIcon from '../assets/icon-moon.svg';
import SunIcon from '../assets/icon-sun.svg';
import {Icon, SwitchContainer, SwitchInput, SwitchLabel, SwitchSlider} from "@frontend/styles/ToggleSwitch";

interface ThemeSwitcherProps {
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, isDark }) => {

    return (
        <SwitchContainer>
            <Icon>
                <img src={SunIcon} alt="Sun Icon" />
            </Icon>
            <SwitchLabel>
                <SwitchInput type="checkbox" checked={isDark} onChange={toggleTheme} />
                <SwitchSlider />
            </SwitchLabel>
            <Icon>
                <img src={MoonIcon} alt="Moon Icon" />
            </Icon>
        </SwitchContainer>
    )
};

export default ThemeSwitcher;
