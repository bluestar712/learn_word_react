import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {publicRoutes, RouteNames} from "../router";
import Welcome from "../pages/Welcome";
import Pick from "../pages/Pick";
import Phrase from "../pages/Phrase";
import Alias from "../pages/Alias";
import Guess from "../pages/Guess";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouteNames.PICK} element={<Pick/>}/>
            <Route path={RouteNames.PHRASE} element={<Phrase/>}/>
            <Route path={RouteNames.ALIAS} element={<Alias/>}/>
            <Route path={RouteNames.GUESS} element={<Guess/>}/>
            <Route path={RouteNames.MAIN} element={<Welcome/>}/>
            <Route index element={<Welcome/>}/>
        </Routes>

    );
};

export default AppRouter;
