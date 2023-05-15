import React from 'react';
import {Link} from "react-router-dom";
import {routes} from "types";

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
      {links.map(({route, label}) =>
        <Link key={route} to={route}>
          <button>{label}</button>
        </Link>
      )}
    </div>
  );
};

export default Pick;
