import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@frontend/styles/thems";
import { GlobalStyles } from "@frontend/styles/GlobalStyles";
import store from './store/store';
import ThemeSwitcher from "@frontend/components/ThemeSwitcher";
import SearchBar from "@frontend/components/SearchBar";

function App() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <Provider store={store}>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles />
                <ThemeSwitcher toggleTheme={toggleTheme} isDark={isDark} />
                <SearchBar />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
