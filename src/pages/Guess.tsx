import React from 'react';
import {useAppSelector} from "store/hooks";
import GuessModule from "modules/GuessModule";

const Guess = () => {
  const words = useAppSelector(state => state.root.words)
  return (
    <GuessModule collection={words} option='words'/>
  )
};

export default Guess;
