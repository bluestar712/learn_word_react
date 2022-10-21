import React from 'react';
import {Link} from "react-router-dom";
import {RouteNames} from "../router";

const Pick = () => {

    return (
        <div className={'flex flex-col gap-4'}>
            <h1>Выбери игру</h1>
            <Link to={RouteNames.GUESS}>
                <button>Слово</button>
            </Link>
            <Link to={RouteNames.PHRASE}>
                <button>Фраза</button>
            </Link>
            <Link to={RouteNames.ALIAS}>
                <button>Alias</button>
            </Link>
            <Link to={RouteNames.COLLECT}>
                <button>Собери</button>
            </Link>
            <a href={RouteNames.TELEGRAM}>
                <button>Telegram</button>
            </a>
        </div>
    );
};

export default Pick;
