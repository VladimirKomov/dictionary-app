import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchWord, setWord } from "@frontend/store/dictionarySlice";
import {
    SearchContainer,
    SearchBox,
    Input,
    SearchButton,
} from "../styles/SearchBar";
import searchIcon from "../assets/icon-search.svg";


const SearchBar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { word, loading } = useSelector((state: RootState) => state.dictionary);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setWord(e.target.value));
    };

    const handleSearch = () => {
        if (word.trim()) {
            dispatch(fetchWord(word));
        } else {
            alert("Please enter a word");
        }
    };

    return (
        <SearchContainer>
            <SearchBox>
                <Input
                    type="text"
                    placeholder="Search for a word..."
                    value={word}
                    onChange={handleInputChange}
                />
                <SearchButton onClick={handleSearch} disabled={loading}>
                    <img src={searchIcon} alt="Search" />
                </SearchButton>
            </SearchBox>
        </SearchContainer>

    );
};

export default SearchBar;
