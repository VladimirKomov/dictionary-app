import './App.css'
import {Provider} from "react-redux";
import store from './store/store';
import SearchBar from './components/SearchBar';
import ThemeSwitcher from "@frontend/components/ThemeSwitcher";
import FontSwitcher from "@frontend/components/FontSwitcher";




function App() {


    return (
        <Provider store={store}>
            <ThemeSwitcher/>
            <FontSwitcher/>
            <SearchBar/>
        </Provider>
    )
}

export default App
