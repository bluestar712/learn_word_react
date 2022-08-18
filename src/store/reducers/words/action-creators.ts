import WordService from "../../../api/WordService";
import {IWord} from "../../../models/IWord";
import {AppDispatch} from "../../index";
import {SetErrorAction, SetIsLoadingAction, SetWordsAction, WordsActionEnum} from "./types";

export const WordsActionCreators = {
    setWords: (payload: IWord[]): SetWordsAction => ({type: WordsActionEnum.SET_WORDS, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: WordsActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: WordsActionEnum.SET_ERROR, payload}),
    fetchWords: () => async (dispatch: AppDispatch) => {
        try {
            const response = await WordService.getWords()
            dispatch(WordsActionCreators.setWords(response.data));
        } catch (e) {
            console.log(e);
        }
    },
}
