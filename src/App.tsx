import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {useTelegram} from "./hooks/useTelegram";
import './App.less';

const App: FC = () => {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])


    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
            <Footer/>
        </Layout>
    );
};

export default App;
