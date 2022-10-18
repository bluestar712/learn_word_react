import {IWord} from "../models/IWord";

export const getShuffled = (arr: IWord[]): IWord[] => arr
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value)

