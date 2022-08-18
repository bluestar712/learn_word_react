import {Button, Modal} from "antd";
import React, {useEffect, useState} from 'react';
import {ReactComponent as Happy} from "../../assets/happy.svg";
import {ReactComponent as Sad} from "../../assets/sad.svg";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IWord} from "../../models/IWord";
import {getShuffled} from "../../utils/utils";

const Guess = () => {
    const {fetchWords} = useActions();
    const {words, isLoading} = useTypedSelector(state => state.words);
    const [list, setList] = useState<IWord[]>([])
    const [correct, setCorrect] = useState<IWord | undefined>(undefined)
    const [clicked, setClicked] = useState<IWord | undefined>(undefined)
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (words.length > 0) {
            const tempList = getShuffled(words).slice(0, 4)
            setList(tempList)
            setCorrect(getShuffled(tempList)[0])
            localStorage.setItem('words.json', JSON.stringify(words))
        } else {
            fetchWords()
        }

    }, [words])


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

    if (isLoading || words.length === 0) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <>
            <h1>{correct?.tat}</h1>
            <audio src={correct?.audio} controls>
                Your browser does not support the audio element.
            </audio>
            <>
                {list.map(({id, tat, rus}) =>
                    <Button
                        key={id} style={{
                        marginBottom: 16
                    }}
                        type="primary" shape="round" size={"large"}
                        onClick={() => handleClick(id)}>{rus}</Button>
                )}
            </>
            <Modal
                visible={modalIsOpen}
                onCancel={closeModal}
                onOk={closeModal}
                footer={null}
                closable={false}
            >
                {correct?.id === clicked?.id ? <Happy style={{width: 90, height: 90}}/> :
                    <Sad style={{width: 90, height: 90}}/>}
                <h3>{correct?.id === clicked?.id ? 'Верно' : 'Неверно'}</h3>
                <Button
                    type={'primary'}
                    size={'large'}
                    onClick={closeModal}>Далее</Button>
            </Modal>
        </>
    );
};

export default Guess;
