import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {useTelegram} from "./hooks/useTelegram";

const App: FC = () => {
    const {tg, user} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])


    return (
        <>
            {!user && <Navbar/>}
            <main>
                <AppRouter/>
            </main>
            <Footer/>
        </>
    );
};

export default App;
