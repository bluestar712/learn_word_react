import {ReactNode} from "react";

export interface IWord {
  id: number,
  rus: string,
  tat: string,
}

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IRoute {
  path: string;
  element: ReactNode;
}

export enum routes {
  MAIN = '/',
  PICK = '/pick',
  GUESS = '/guess',
  ALIAS = '/alias',
  PHRASE = '/phrase',
  COLLECT = '/collect',
  TELEGRAM = 'https://t.me/ChamalaBot'
}

