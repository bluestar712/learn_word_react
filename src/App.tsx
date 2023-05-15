import Spinner from "components/Spinner";
import useTelegram from "hooks/useTelegram";
import Welcome from "pages/Welcome";
import React, {FC, lazy, Suspense, useEffect} from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {IRoute, routes} from "types";

const Alias = lazy(() => import("pages/Alias"));
const Collect = lazy(() => import("pages/Collect"))
const Guess = lazy(() => import("pages/Guess"));
const Phrase = lazy(() => import("pages/Phrase"));
const Pick = lazy(() => import("pages/Pick"));

const appRoutes: IRoute[] = [
  {
    path: routes.MAIN,
    element: <Welcome/>
  },
  {
    path: routes.PICK,
    element: <Pick/>
  },
  {
    path: routes.GUESS,
    element: <Guess/>
  },
  {
    path: routes.PHRASE,
    element: <Phrase/>
  },
  {
    path: routes.COLLECT,
    element: <Collect/>
  },
  {
    path: routes.ALIAS,
    element: <Alias/>
  }
]

const App: FC = () => {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <>
      <header className='flex items-center p-4 text-green font-bold'>
        <Link to={routes.MAIN}>Illia</Link>
      </header>
      <main>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            {appRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
            <Route path='*' element={<Navigate to={routes.MAIN}/>}/>
          </Routes>
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
