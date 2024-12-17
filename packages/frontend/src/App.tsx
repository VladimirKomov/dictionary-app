import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "@frontend/styles/themes";
import ThemeSwitcher from "@frontend/components/ThemeSwitcher";
import {GlobalStyles} from "@frontend/styles/globalStyles";
import HeaderContainer from "@frontend/styles/HeaderContainer";
import FontSwitcher from "@frontend/components/FontSwitcher";

function App() {
    const [isDark, setIsDark] = useState(false);
    const [font, setFont] = useState("sans-serif");

    const toggleTheme = () => setIsDark(!isDark);
    const toggleFont = (font: string) => setFont(font);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <HeaderContainer>
                <FontSwitcher toggleFont={toggleFont} currentFont={font}/>
                <ThemeSwitcher toggleTheme={toggleTheme} isDark={isDark}/>
            </HeaderContainer>
        </ThemeProvider>
    );
}

export default App;
