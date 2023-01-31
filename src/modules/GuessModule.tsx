import Audio from "components/Audio";
import Icon from "components/Icon";
import Modal from "components/Modal";
import {getShuffled} from "helpers/utils";
import React, {useMemo, useState} from 'react';
import {IWord} from "types";

const GuessModule = ({collection, option}: { collection: IWord[], option: 'words' | 'phrases' }) => {
    const [list, setList] = useState<IWord[]>(() => getShuffled(collection).slice(0, 4))
    const correct = useMemo(() => getShuffled(list)[0], [list])
    const [answer, setAnswer] = useState<IWord | undefined>(undefined)

    const handleNext = () => {
        setAnswer(undefined)
        setList(getShuffled(collection).slice(0, 4))
    }

    const handleAnswer = (id: number) => {
        setAnswer(list.find(x => x.id === id))
    }

    return (
        <>
            <div className='grid grid-cols-1 gap-4'>
                <h1 className='capitalize'>{correct.tat}</h1>
                <Audio text={option + '/' + correct.tat.toLowerCase()}/>
                <div className='mt-4 flex flex-col'>
                    {list.map(({id, rus}) =>
                        <button
                            key={id}
                            className='mb-4'
                            onClick={() => handleAnswer(id)}>{rus}</button>
                    )}
                </div>
            </div>
            {answer &&
                <Modal open={answer ? true : false}>
                    <Icon correct={correct.id === answer.id}/>
                    <h3>{correct.id === answer?.id ? 'Верно' : 'Неверно'}</h3>
                    <button
                        onClick={handleNext}>Далее
                    </button>
                </Modal>}
        </>

    );
};

export default GuessModule;
