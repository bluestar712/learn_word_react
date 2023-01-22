import React from 'react';
import {useAppSelector} from "store/hooks";
import GuessModule from "modules/GuessModule";

const Phrase = () => {
  const phrases = useAppSelector(state => state.root.phrases)
  return (
    <GuessModule collection={phrases} option='phrases'/>
  )
};

export default Phrase;
