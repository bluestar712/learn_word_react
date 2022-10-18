import React, {useEffect, useState} from 'react';
import {IWord} from "../models/IWord";
import {getShuffled} from "../utils/utils";
import {useAppSelector} from "../store/hooks";
import Modal from "../components/Modal/Modal";
import {imageLinks} from "../data";

const Guess = () => {
    const {words} = useAppSelector(state => state.word)
    const [list, setList] = useState<IWord[]>([])
    const [correct, setCorrect] = useState<IWord | undefined>(undefined)
    const [clicked, setClicked] = useState<IWord | undefined>(undefined)
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const tempList = getShuffled(words).slice(0, 4)
        setList(tempList)
        setCorrect(getShuffled(tempList)[0])
    }, [])


    const closeModal = () => {
        setClicked(undefined)
        const tempList = getShuffled(words).slice(0, 4)
        setList(tempList)
        setCorrect(getShuffled(tempList)[0])
        setIsOpen(false);
    }

    const handleClick = (id: number) => {
        setClicked(list.find(x => x.id === id))
        setIsOpen(true);
    }

    return (
        <>
            <div className={'grid grid-cols-1 gap-4'}>
                <h1 className={'capitalize'}>{correct?.tat}</h1>
                <audio src={`https://innostudy.ru/audio/${correct?.tat.toLowerCase()}.mp3`} controls>
                    Your browser does not support the audio element.
                </audio>
                <div
                    className={'mt-4 flex flex-col'}>
                    {list.map(({id, tat, rus}) =>
                        <button
                            key={id}
                            className={'mb-4'}
                            onClick={() => handleClick(id)}>{rus}</button>
                    )}
                </div>
            </div>
            {modalIsOpen && <Modal
            >
                <img src={correct?.id === clicked?.id ? imageLinks.happy : imageLinks.sad} width={90} height={90}/>
                <h3>{correct?.id === clicked?.id ? 'Верно' : 'Неверно'}</h3>
                <button
                    onClick={closeModal}>Далее
                </button>
            </Modal>}
        </>

    );
};

export default Guess;
