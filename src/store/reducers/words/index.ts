import {WordsAction, WordsActionEnum, WordsState} from "./types";


const initialState: WordsState = {
    error: '',
    isLoading: false,
    words: []
}

export default function wordsReducer(state = initialState, action: WordsAction): WordsState {
    switch (action.type) {
        case WordsActionEnum.SET_WORDS:
            return {...state, words: action.payload, isLoading: false}
        case WordsActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case WordsActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}
