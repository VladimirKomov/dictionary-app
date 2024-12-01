import React, {useState} from "react";
import {GlobalStyles} from "@frontend/styles/GlobalStyles";
import {CenteredContainer} from "@frontend/styles/AppContainer";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "@frontend/styles/themes";
import ThemeSwitcher from "@frontend/components/ThemeSwitcher";

function App() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <CenteredContainer>
                <ThemeSwitcher toggleTheme={toggleTheme} isDark={isDark}/>
            </CenteredContainer>
        </ThemeProvider>
    );
}

export default App;
