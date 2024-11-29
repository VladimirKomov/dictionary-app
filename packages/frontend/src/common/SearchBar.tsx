import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import {fetchWord, setWord} from "@frontend/store/dictionarySlice";




const SearchBar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { word, results, loading, error } = useSelector((state: RootState) => state.dictionary);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setWord(e.target.value));
    };

    const handleSearch = () => {
        if (word.trim()) {
            dispatch(fetchWord(word));
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a word"
                value={word}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? "Searching..." : "Search"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {results && (
                <div>
                    <h3>Results for "{word}":</h3>
                    <pre>{JSON.stringify(results, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
