import React, {useMemo, useState} from 'react';
import {useTimer} from 'react-timer-hook';
import {getShuffled} from "helpers/utils";
import {useAppSelector} from "store/hooks";
import {imageLinks} from "data";
import Modal from "components/Modal";

const Alias = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [skip, setSkip] = useState(0)
  const words = useAppSelector(state => state.root.words);

  const shuffled = useMemo(() =>
      getShuffled(words)
    , [words])
  let time = new Date();

  const {
    seconds,
    isRunning,
    restart,
  } = useTimer({expiryTimestamp: time, autoStart: false, onExpire: () => setModalVisible(true)})


  const resetGame = () => {
    setCorrect(0)
    setSkip(0)
    time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    restart(time)
  }

  if (!isRunning) {

    return (
      <>
        <Modal open={modalVisible}
        >
          <img src={imageLinks.happy} width={120} height={120}/>
          <span>{`Верно: ${correct}`}</span>
          <span>{`Пропущено: ${skip}`}</span>
          <span>{`Итог: ${correct - skip}`}</span>
          <button onClick={resetGame}>Старт</button>
        </Modal>
        <div>
          <h1>Алиас</h1>
          <span>Нажми Старт для начала игры!</span>
          <div className={'text-9xl'}>
            {seconds}
          </div>
          <button
            className={'block mx-auto'}
            onClick={resetGame}
          >
            Старт
          </button>
        </div>
      </>

    )
  }

  return (
    <div>
      <div className={'grid grid-cols-2 gap-4 text-7xl'}>
        <span className={'text-red'}>{skip}</span>
        <span className={'text-green'}>{correct}</span>
      </div>

      <h1>{shuffled[index].tat.toUpperCase()}</h1>
      <span>{shuffled[index].rus.toUpperCase()}</span>
      <div className={'text-9xl'}>
        {seconds}
      </div>
      <div className={'grid grid-cols-2 gap-4'}>
        <button
          className={'bg-red'}
          onClick={() => {
            setSkip(prevState => prevState + 1)
            setIndex(prevState => prevState + 1)
          }}
        >Пропустить
        </button>
        <button
          className={'bg-green'}
          onClick={() => {
            setCorrect(prevState => prevState + 1)
            setIndex(prevState => prevState + 1)
          }}
        >
          Верно
        </button>
      </div>

    </div>
  );
};

export default Alias;
