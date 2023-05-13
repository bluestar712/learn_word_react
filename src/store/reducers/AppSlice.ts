import {createSlice} from "@reduxjs/toolkit";
import {phrases, words} from "store/backend";
import {IWord} from "types";

interface AppState {
    words: IWord[];
    phrases: IWord[];
}

const initialState: AppState = {
    words: words,
    phrases: phrases
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
})

export default appSlice.reducer;
