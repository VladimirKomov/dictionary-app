import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "@frontend/styles/themes";
import ThemeSwitcher from "@frontend/components/ThemeSwitcher";
import {GlobalStyles} from "@frontend/styles/globalStyles";
import HeaderContainer from "@frontend/styles/HeaderContainer";
import FontSwitcher from "@frontend/components/FontSwitcher";

function App() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <HeaderContainer>
                <FontSwitcher/>
                <ThemeSwitcher toggleTheme={toggleTheme} isDark={isDark}/>
            </HeaderContainer>
        </ThemeProvider>
    );
}

export default App;
