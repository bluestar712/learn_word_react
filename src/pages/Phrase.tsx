import React, {useMemo, useState} from 'react';
import {IWord} from "types";
import {getShuffled} from "helpers/utils";
import {useAppSelector} from "store/hooks";
import Audio from "components/Audio";
import Icon from "components/Icon";

const Phrase = () => {
  const phrases = useAppSelector(state => state.root.phrases)
  const [list, setList] = useState<IWord[]>(() => getShuffled(phrases).slice(0, 4))
  const correct = useMemo(() => getShuffled(list)[0], [list])
  const [answer, setAnswer] = useState<IWord | undefined>(undefined)

  const handleNext = () => {
    setAnswer(undefined)
    setList(getShuffled(phrases).slice(0, 4))
  }

  const handleAnswer = (id: number) => {
    setAnswer(list.find(x => x.id === id))
  }

  return (
    <>
      <div className={'grid grid-cols-1 gap-4'}>
        <h1 className={'capitalize'}>{correct.tat}</h1>
        <Audio text={'phrases/' + correct.tat.toLowerCase()}/>
        <div
          className={'mt-4 flex flex-col'}>
          {list.map(({id, tat, rus}) =>
            <button
              key={id}
              className={'mb-4'}
              onClick={() => handleAnswer(id)}>{rus}</button>
          )}
        </div>
      </div>
      {answer && <dialog open={true}
      >
          <Icon correct={correct.id === answer?.id}/>
          <h3>{correct?.id === answer?.id ? 'Верно' : 'Неверно'}</h3>
          <button
              onClick={handleNext}>Далее
          </button>
      </dialog>}
    </>
  )
    ;
};

export default Phrase;
