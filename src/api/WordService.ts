import axios, {AxiosResponse} from "axios";
import {IWord} from "../models/IWord";

export default class WordService {
    static async getWords(): Promise<AxiosResponse<IWord[]>> {
        return axios.get<IWord[]>('./words.json')
    }
}
