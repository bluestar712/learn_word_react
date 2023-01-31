import {useAppSelector} from "hooks/redux";
import GuessModule from "modules/GuessModule";
import React from 'react';

const Guess = () => {
    const words = useAppSelector(state => state.appReducer.words)
    return (
        <GuessModule collection={words} option='words'/>
    )
};

export default Guess;
