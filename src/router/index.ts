import React from "react";
import Alias from "../pages/Alias/Alias";
import Guess from "../pages/Guess/Guess";
import Login from "../pages/Login";
import Pick from "../pages/Pick/Pick";
import Welcome from "../pages/Welcome/Welcome";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    PICK = '/pick',
    LOGIN = '/login',
    MAIN = '/',
    GUESS = '/guess',
    ALIAS = '/alias'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.PICK, exact: true, component: Pick},
    {path: RouteNames.LOGIN, exact: true, component: Login},
    {path: RouteNames.MAIN, exact: true, component: Welcome},
    {path: RouteNames.ALIAS, exact: true, component: Alias},
    {path: RouteNames.GUESS, exact: true, component: Guess}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.MAIN, exact: true, component: Welcome}
]
