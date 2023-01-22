import {getShuffled} from "helpers/utils";
import React, {useCallback, useEffect, useState} from 'react';
import {useAppSelector} from "store/hooks";
import {IWord} from "types";
import Audio from "components/Audio";
import Icon from "components/Icon";

export interface CollectProps {
  id: number,
  word: string
}

const Collect = () => {
  const phrases = useAppSelector(state => state.root.phrases)
  const [isTrue, setIsTrue] = useState(false)
  const [correct, setCorrect] = useState<IWord | undefined>(undefined)
  const [options, setOptions] = useState<CollectProps[]>([])
  const [chosens, setChosens] = useState<CollectProps[]>([])
  const [open, setIsOpen] = useState(false);

  const getNewPhrase = useCallback(() => {
    const correct = getShuffled(phrases)[0]
    const fake = getShuffled(phrases)[1]
    setCorrect(correct)
    const realOptions = correct.tat.toLowerCase().split(' ')
    const fakeOptions = fake.tat.toLowerCase().split(' ')

    setOptions(getShuffled([...realOptions, ...fakeOptions]).map((x, index) => ({word: x, id: index}))
    )
    setIsOpen(false)
    setIsTrue(false)
    setChosens([])
  }, [phrases])

  useEffect(() => {
    getNewPhrase()
  }, [getNewPhrase])


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

  if (!correct) {
    return null
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-4 w-96 max-w-full items-center'>
        <h1 className='capitalize'>{correct.rus}</h1>
        <Audio text={'phrases/' + correct.tat.toLowerCase()}/>
        <ul className='flex gap-4 min-h-[100px] flex-wrap'>
          {chosens.map(x =>
            <li key={x.id} className='border h-fit cursor-pointer w-fit px-4 py-2 rounded'
                onClick={() => handleRemove(x)}>{x.word}
            </li>)}
        </ul>
        <hr/>
        <ul className={'flex gap-4 min-h-[100px] flex-wrap'}>
          {options.map(x => <li key={x.id} className={'border h-fit cursor-pointer w-fit px-4 py-2 rounded'}
                                onClick={() => handleAdd(x)}>{x.word}</li>)}

        </ul>
        <button disabled={chosens.length === 0} className={'disabled:bg-red'} onClick={handleCheck}>Проверить
        </button>
      </div>
      {
        open && <dialog open={true}>
              <Icon correct={isTrue}/>
              <h3>{isTrue ? 'Верно' : 'Неверно'}</h3>
              <button
                  onClick={closeModal}>Далее
              </button>
          </dialog>
      }
    </>
  );
};

export default Collect;
