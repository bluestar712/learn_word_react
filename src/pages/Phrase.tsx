import {useAppSelector} from "hooks/redux";
import GuessModule from "modules/GuessModule";
import React from 'react';

const Phrase = () => {
  const phrases = useAppSelector(state => state.appReducer.phrases)
  return (
    <GuessModule collection={phrases} option='phrases'/>
  )
};

export default Phrase;
