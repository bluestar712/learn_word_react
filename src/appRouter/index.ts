import {ReactNode} from "react";

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
