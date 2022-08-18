import axios from "axios";
import {IWord} from "../models/IWord";

export const getShuffled = (arr: IWord[]): IWord[] => arr
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value)

export const putWord = async (word: IWord) => {
    try {
        const res = await axios.put(`https://chamala-backend.herokuapp.com/api/phrase/${word.id}`, {
            ...word,
            audio: `https://talgat.corpus.tatar/search/rhvoice.php?t=${word.tat}`
        })
        console.log('putWord', res.data)
    } catch (e) {
        console.log('e', e)
    }
}

export const asyncForEach = async (array: IWord[]) => {
    for (const element of array) {
        await putWord(element);
    }
    return true;
}
