import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import wordReducer from './reducers/word/wordSlice';
import phraseReducer from './reducers/phrase/phraseSlice';

export const store = configureStore({
    reducer: {
        word: wordReducer,
        phrase: phraseReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;