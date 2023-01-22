import React from 'react';
import {Link} from "react-router-dom";
import {routes} from "appRouter";

const links = [
  {
    route: routes.GUESS,
    label: 'Слово'
  },
  {
    route: routes.PHRASE,
    label: 'Фраза'
  },
  {
    route: routes.ALIAS,
    label: 'Alias'
  },
  {
    route: routes.COLLECT,
    label: 'Собери'
  },
]

const Pick = () => {

  return (
    <div className={'flex flex-col gap-4'}>
      <h1>Выбери игру</h1>
      {links.map(({route, label}) => <Link key={route} to={route}>
        <button>{label}</button>
      </Link>)}
      <a href={routes.TELEGRAM}>
        <button>Telegram</button>
      </a>
    </div>
  );
};

export default Pick;
