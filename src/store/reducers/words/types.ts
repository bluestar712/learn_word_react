import {IWord} from "../../../models/IWord";

export interface WordsState {
    words: IWord[];
    isLoading: boolean;
    error: string;
}

export enum WordsActionEnum {
    SET_ERROR = "SET_ERROR",
    SET_WORDS = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetErrorAction {
    type: WordsActionEnum.SET_ERROR;
    payload: string;
}

export interface SetWordsAction {
    type: WordsActionEnum.SET_WORDS;
    payload: IWord[];
}

export interface SetIsLoadingAction {
    type: WordsActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type WordsAction =
    SetWordsAction |
    SetErrorAction |
    SetIsLoadingAction
