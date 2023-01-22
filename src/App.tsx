import {Link} from "react-router-dom";
import AppRouter from "appRouter/AppRouter";
import {useTelegram} from "hooks/useTelegram";
import React, {FC, useEffect} from 'react';
import {routes} from "./appRouter";

const App: FC = () => {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <>
      <header className='flex items-center p-4 text-green font-bold'>
        <Link to={routes.MAIN}>Chamala</Link>
      </header>
      <main>
        <AppRouter/>
      </main>
    </>
  );
};

export default App;
