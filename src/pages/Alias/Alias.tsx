import {Button, Modal} from "antd";
import React, {useEffect, useMemo, useState} from 'react';
import {useTimer} from 'react-timer-hook';
import {ReactComponent as Happy} from "../../assets/happy.svg";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getShuffled} from "../../utils/utils";
import classes from './Alias.module.scss'

const Alias = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [skip, setSkip] = useState(0)
    const {fetchWords} = useActions();
    const {words, isLoading} = useTypedSelector(state => state.words);
    const shuffled = useMemo(() =>
            getShuffled(words)
        , [words])
    let time = new Date();

    const {
        seconds,
        isRunning,
        restart,
    } = useTimer({expiryTimestamp: time, autoStart: false, onExpire: () => setModalVisible(true)})


    useEffect(() => {
        if (words.length === 0) {
            fetchWords()
        }
    }, [words])

    const resetGame = () => {
        setCorrect(0)
        setSkip(0)
        time = new Date();
        time.setSeconds(time.getSeconds() + 60);
        restart(time)
    }

    if (isLoading || words.length === 0) {
        return (
            <div>Loading</div>
        )
    }

    if (!isRunning) {
        return (
            <div className={classes.alias}>
                <h1>Алиас</h1>
                <span>Нажми Старт для начала игры!</span>
                <div style={{fontSize: '100px'}}>
                    {seconds}
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Button
                        type="primary" shape="round" size={"large"}
                        onClick={resetGame}
                    >
                        Старт
                    </Button>
                </div>
                <Modal visible={modalVisible}
                       title="Добавить событие"
                       footer={null}
                       onCancel={() => setModalVisible(false)}
                       >
                    <>
                        <Happy style={{width: 120, height: 120}}/>
                        <span>{`Верно: ${correct}`}</span>
                        <span>{`Пропущено: ${skip}`}</span>
                        <span>{`Итог: ${correct - skip}`}</span>
                        <Button onClick={resetGame}>Старт</Button>
                    </>
                </Modal>
            </div>
        )
    }

    return (
        <div className={classes.alias}>
            <div>
                <span>{`Верно: ${correct}`}</span>
                <span>{`Пропущено: ${skip}`}</span>
                <span>{`Итог: ${correct - skip}`}</span>
            </div>

            <h1>{shuffled[index].tat.toUpperCase()}</h1>
            <span>{shuffled[index].rus.toUpperCase()}</span>
            <div style={{fontSize: '100px'}}>
                {seconds}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>

                    <Button
                        type="primary" shape="round" size={"large"}
                        onClick={() => {
                            setSkip(prevState => prevState + 1)
                            setIndex(prevState => prevState + 1)
                        }}
                    >Пропустить</Button>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        type="primary" shape="round" size={"large"}
                        onClick={() => {
                        setCorrect(prevState => prevState + 1)
                        setIndex(prevState => prevState + 1)
                    }}
                    >
                        Верно
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Alias;
