import React, {useEffect, useState} from 'react';
import {ReactComponent as Happy} from "../assets/happy.svg";
import {ReactComponent as Sad} from "../assets/sad.svg";
import {IWord} from "../models/IWord";
import {getShuffled} from "../utils/utils";
import {useAppSelector} from "../store/hooks";
import Modal from "../components/Modal/Modal";


const Phrase = () => {
    const {phrases} = useAppSelector(state => state.phrase)
    const [list, setList] = useState<IWord[]>([])
    const [correct, setCorrect] = useState<IWord | undefined>(undefined)
    const [clicked, setClicked] = useState<IWord | undefined>(undefined)
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const tempList = getShuffled(phrases).slice(0, 4)
        setList(tempList)
        setCorrect(getShuffled(tempList)[0])
    }, [])


    const closeModal = () => {
        setClicked(undefined)
        const tempList = getShuffled(phrases).slice(0, 4)
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
            <h1>{correct?.tat}</h1>
            <audio src={`https://innostudy.ru/audio/phrases/${correct?.tat.toLowerCase()}.mp3`} controls>
                Your browser does not support the audio element.
            </audio>
            <div style={{marginTop: 16, display: 'flex', flexDirection: 'column'}}>
                {list.map(({id, tat, rus}) =>
                    <button
                        key={id} style={{
                        marginBottom: 16
                    }}

                        onClick={() => handleClick(id)}>{rus}</button>
                )}
            </div>

            {modalIsOpen &&
                <Modal visible={modalIsOpen}>
                    {correct?.id === clicked?.id ? <Happy style={{width: 90, height: 90}}/> :
                        <Sad style={{width: 90, height: 90}}/>}
                    <h3>{correct?.id === clicked?.id ? 'Верно' : 'Неверно'}</h3>
                    <button
                        onClick={closeModal}>Далее
                    </button>
                </Modal>
            }
        </>
    );
};

export default Phrase;
