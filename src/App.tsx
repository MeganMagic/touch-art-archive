import React from 'react';
import { Outlet, useLocation } from 'react-router';
import LanguageButton from './components/LanguageButton';
import Logo from './components/Logo';
import BackButton from "./components/BackButton";

import './scss/styles.scss'

const App = () => {
    const location = useLocation()

    return (
    <div className="container">
        {
            location.pathname && location.pathname === '/about' ?
            <header className="header-global">
                <BackButton />
            </header>
            :
            location.pathname && location.pathname === '/' ?
            <header className="header-global">
                <Logo />
                <LanguageButton />
            </header>
            :
            <header className="header-global">
                <Logo />
                <LanguageButton />
                <BackButton />
            </header>
        }
        <Outlet />
    </div>
    );
}

export default App;
