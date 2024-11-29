import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {backPath} from "@frontend/setting";


interface DictionaryEntry {
    word: string;
    phonetic?: string;
    phonetics: { text: string; audio?: string }[];
    meanings: {
        partOfSpeech: string;
        definitions: { definition: string; example?: string; synonyms: string[]; antonyms: string[] }[];
    }[];
}

interface DictionaryState {
    word: string;
    results: DictionaryEntry[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: DictionaryState = {
    word: '',
    results: null,
    loading: false,
    error: null,
}

export const fetchWord = createAsyncThunk<DictionaryEntry[], string, { rejectValue: string }>(
    'dictionary/fetchWord',
    async (word: string, {rejectWithValue}) => {
        try {
            const res = await axios.get(`${backPath}api/dictionary/${word}`)
            return res.data;
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                return rejectWithValue(`Error ${err.response.status}: ${err.response.statusText}`);
            }
            return rejectWithValue("Network error or invalid response.");
        }
    }
)

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,

    reducers: {
        setWord: (state, action) => {
            state.word = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchWord.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWord.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(fetchWord.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

    }
})

export const {setWord} = dictionarySlice.actions;
export default dictionarySlice.reducer;
