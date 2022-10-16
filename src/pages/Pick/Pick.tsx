import {Button} from "antd";
import React from 'react';
import {Link} from "react-router-dom";
import {RouteNames} from "../../router";
import classes from './Pick.module.scss'

const Pick = () => {
    return (
        <div className={classes.pickGame}>
            <h1>Выбери игру</h1>
            <Link to={RouteNames.GUESS}><Button type="primary" shape="round" size={"large"}>Слово</Button></Link>
            <Link to={RouteNames.PHRASE}><Button type="primary" shape="round" size={"large"}>Фраза</Button></Link>
            <Link to={RouteNames.ALIAS}><Button type="primary" shape="round" size={"large"}>Alias</Button></Link>
            <a href={RouteNames.TELEGRAM}><Button type="primary" shape="round" size={"large"}>Telegram</Button></a>
        </div>
    );
};

export default Pick;
