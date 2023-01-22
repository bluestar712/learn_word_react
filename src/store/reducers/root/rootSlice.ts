import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWord} from "types";
import {phrases, words} from "data";

export interface WordState {
  words: IWord[];
  phrases: IWord[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: WordState = {
  words: words,
  phrases: phrases,
  status: 'idle',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setWords: (state, action: PayloadAction<IWord[]>) => {
      state.words = action.payload
    },
  },
});

export const {setWords} = rootSlice.actions;


export default rootSlice.reducer;
