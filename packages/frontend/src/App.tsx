import './App.css'
import {Provider} from "react-redux";
import store from './store/store';
import SearchBar from './common/SearchBar';




function App() {


    return (
        <Provider store={store}>
            <SearchBar/>
        </Provider>
    )
}

export default App
