import React from 'react';
import { Outlet } from 'react-router';
import LanguageButton from './components/LanguageButton';
import Logo from './components/Logo';
import BackButton from "./components/BackButton";

import './scss/styles.scss'

const App = () => {
    return (
    <div className="container">
        <header className="header-global">
            <Logo />
            <LanguageButton />
            <BackButton />
        </header>
        <Outlet />
    </div>
    );
}

export default App;
