import React from "react";
import Alias from "../pages/Alias";
import Guess from "../pages/Guess";
import Pick from "../pages/Pick";
import Welcome from "../pages/Welcome";
import Phrase from "../pages/Phrase";

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
    TELEGRAM = 'https://t.me/ChamalaBot'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.PICK, component: Pick},
    {path: RouteNames.ALIAS, component: Alias},
    {path: RouteNames.GUESS, component: Guess},
    {path: RouteNames.PHRASE, component: Phrase},
]