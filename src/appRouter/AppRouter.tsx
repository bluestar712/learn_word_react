import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Collect from "pages/Collect";
import Guess from "pages/Guess";
import Phrase from "pages/Phrase";
import Pick from "pages/Pick";
import Welcome from "pages/Welcome";
import Alias from "pages/Alias";
import {routes} from "./index";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.MAIN} element={<Welcome/>}/>
      <Route path={routes.PICK} element={<Pick/>}/>
      <Route path={routes.GUESS} element={<Guess/>}/>
      <Route path={routes.PHRASE} element={<Phrase/>}/>
      <Route path={routes.COLLECT} element={<Collect/>}/>
      <Route path={routes.ALIAS} element={<Alias/>}/>
      <Route path='*' element={<Navigate to={routes.MAIN}/>}/>
    </Routes>

  );
};

export default AppRouter;
