import {Button} from "antd";
import cn from 'classnames'
import React, {FC} from 'react';
import {isMobile} from 'react-device-detect';
import {Link} from "react-router-dom";
import {RouteNames} from "../../router";
import welcome from './Welcome.module.scss'
import {ReactComponent as Logo} from "./welcome.svg";

const Welcome: FC = () => {
    return (
        <>
            <Logo/>
            <h1 className={cn(welcome.title, {
                [welcome.titleMobile]: isMobile
            })}>Изучение татарского языка в формате мини-игр</h1>
            <Link to={RouteNames.PICK}>
                <Button
                    type="primary" shape="round" size={"large"}
                >Начать</Button>
            </Link>
        </>
    );
};

export default Welcome;
