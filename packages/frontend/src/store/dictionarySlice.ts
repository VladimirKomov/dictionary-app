import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {backPath} from "@frontend/setting";

interface Phonetic {
    text: string;
    audio?: string;
}

interface Definition {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
}

export interface DictionaryEntry {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
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
};

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
        setWord: (state, action: PayloadAction<string>) => {
            state.word = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchWord.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.results = null;
            })
            .addCase(fetchWord.fulfilled, (state, action: PayloadAction<DictionaryEntry[]>) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(fetchWord.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'An unknown error occurred.';
            });

    },
})

export const {setWord} = dictionarySlice.actions;
export default dictionarySlice.reducer;
