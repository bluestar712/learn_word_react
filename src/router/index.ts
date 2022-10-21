import React from "react";
import Alias from "../pages/Alias";
import Guess from "../pages/Guess";
import Pick from "../pages/Pick";
import Phrase from "../pages/Phrase";
import Collect from "../pages/Collect";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    MAIN = '/',
    PICK = '/pick',
    GUESS = '/guess',
    ALIAS = '/alias',
    PHRASE = '/phrase',
    COLLECT = '/collect',
    TELEGRAM = 'https://t.me/ChamalaBot'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.PICK, component: Pick},
    {path: RouteNames.ALIAS, component: Alias},
    {path: RouteNames.GUESS, component: Guess},
    {path: RouteNames.PHRASE, component: Phrase},
    {path: RouteNames.COLLECT, component: Collect},
]