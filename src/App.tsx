import React from 'react';
import { Outlet } from 'react-router';
import LanguageButton from './components/LanguageButton';
import Logo from './components/Logo';

import './scss/styles.scss'

const App = () => {
    return (
    <div className="container">
        <Logo />
        <LanguageButton />
        <Outlet />
    </div>
    );
}

export default App;
