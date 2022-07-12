import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import {WordProps} from "../../App";
import {getPhrasesAsync, selectGame} from "../../redux/gameSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getShuffled} from "../api";
import Button from "../Button/Button";
import {ReactComponent as Happy} from "./../../assets/happy.svg";
import {ReactComponent as Sad} from "./../../assets/sad.svg";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '200'
    },
};

interface ModalBlockProps {
    correct: boolean,
    closeModal: () => void
}

const ModalBlock = ({correct, closeModal}: ModalBlockProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {correct ? <Happy style={{width: 90, height: 90}}/> :
                <Sad style={{width: 90, height: 90}}/>}
            <h3>{correct ? 'Верно' : 'Неверно'}</h3>
            <Button onClick={closeModal}>Далее</Button>
        </div>
    )

}

const Phrase = () => {
    const [words, setWords] = useState<WordProps[]>([])
    const [list, setList] = useState<WordProps[]>([])
    const [correct, setCorrect] = useState<WordProps | undefined>(undefined)
    const [clicked, setClicked] = useState<WordProps | undefined>(undefined)
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const {status, phrases: backendWords} = useAppSelector(selectGame);
    const dispatch = useAppDispatch();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setClicked(undefined)
        const temp = getShuffled(words).slice(0, 4)
        setList(temp)
        setCorrect(getShuffled(temp)[0])
        setIsOpen(false);
    }


    useEffect(() => {
        if (backendWords.length > 0) {
            setWords(backendWords);
            const list = getShuffled(backendWords).slice(0, 4)
            setList(list)
            setCorrect(list[0])
            localStorage.setItem('words', JSON.stringify(backendWords))
        }

    }, [backendWords])


    useEffect(() => {
        if (backendWords.length === 0) {
            dispatch(getPhrasesAsync())
        }
    }, [dispatch])

    const handleClick = (id: number) => {
        setClicked(list.find(x => x.id === id))
        openModal()
    }
    return (
        <>
            {((words.length > 0) && correct && (status !== 'loading')) ?
                <>
                    <h1>{correct.tat}</h1>
                    <audio src={correct.audio} controls>
                        Your browser does not support the audio element.
                    </audio>
                    <ul style={{marginTop: 16}}>
                        {list.map(({id, tat, rus}) => <li key={id} style={{
                            marginBottom: 16
                        }}><Button
                            onClick={() => handleClick(id)}>{rus}</Button>
                        </li>)}
                    </ul>
                </> : <div>Loading</div>}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ModalBlock correct={correct?.id === clicked?.id} closeModal={closeModal}/>
            </Modal>
        </>
    );
};

export default Phrase;