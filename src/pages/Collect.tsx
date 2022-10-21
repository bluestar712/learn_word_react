import React, {useCallback, useEffect, useState} from 'react';
import {useAppSelector} from "../store/hooks";
import {IWord} from "../models/IWord";
import {getShuffled, getShuffledStrings} from "../utils/utils";
import Modal from "../components/Modal/Modal";
import {imageLinks} from "../data";

export interface CollectProps {
    id: number,
    word: string
}

const Collect = () => {
    const {phrases} = useAppSelector(state => state.phrase)
    const [isTrue, setIsTrue] = useState(false)
    const [correct, setCorrect] = useState<IWord | undefined>(undefined)
    const [options, setOptions] = useState<CollectProps[]>([])
    const [chosens, setChosens] = useState<CollectProps[]>([])
    const [modalIsOpen, setIsOpen] = useState(false);

    const getNewPhrase = useCallback(() => {
        const correct = getShuffled(phrases)[0]
        const fake = getShuffled(phrases)[1]
        setCorrect(correct)
        const realOptions = correct.tat.toLowerCase().split(' ')
        const fakeOptions = fake.tat.toLowerCase().split(' ')

        setOptions(getShuffledStrings([...realOptions, ...fakeOptions]).map((x, index) => ({word: x, id: index}))
        )
        setIsOpen(false)
        setIsTrue(false)
        setChosens([])
    }, [correct])

    useEffect(() => {
        getNewPhrase()
    }, [])


    const closeModal = () => {
        getNewPhrase()
    }

    const handleAdd = (x: CollectProps) => {
        setChosens(prevState => [...prevState, x])
        setOptions(prevState => prevState.filter(item => item.id !== x.id))
    }

    const handleRemove = (x: CollectProps) => {
        setChosens(prevState => prevState.filter(item => item.id !== x.id))
        setOptions(prevState => [...prevState, x])
    }

    const handleCheck = () => {
        const original = correct?.tat.toLowerCase()
        const current = chosens.map(x => x.word.toLowerCase()).join(' ')
        setIsTrue(original === current)
        setIsOpen(true)
    }


    return (

        <>
            <div className={'grid grid-cols-1 gap-4 w-96 max-w-full items-center'}>
                <h1 className={'capitalize'}>{correct?.rus}</h1>
                <audio className={'mx-auto'}
                       src={`https://innostudy.ru/audio/phrases/${correct?.tat.toLowerCase()}.mp3`} controls>
                    Your browser does not support the audio element.
                </audio>
                <ul className={'flex gap-4 min-h-[100px] flex-wrap'}>
                    {chosens.map(x => <li key={x.id} className={'border h-fit cursor-pointer w-fit px-4 py-2 rounded'}
                                          onClick={() => handleRemove(x)}>{x.word}</li>)}

                </ul>
                <hr/>
                <ul className={'flex gap-4 min-h-[100px] flex-wrap'}>
                    {options.map(x => <li key={x.id} className={'border h-fit cursor-pointer w-fit px-4 py-2 rounded'}
                                          onClick={() => handleAdd(x)}>{x.word}</li>)}

                </ul>
                <button disabled={chosens.length === 0} className={'disabled:bg-red'} onClick={handleCheck}>Проверить
                </button>
            </div>
            {modalIsOpen && <Modal
            >
                <img src={isTrue ? imageLinks.happy : imageLinks.sad} width={90} height={90}/>
                <h3>{isTrue ? 'Верно' : 'Неверно'}</h3>
                <button
                    onClick={closeModal}>Далее
                </button>
            </Modal>}
        </>
    );
};

export default Collect;