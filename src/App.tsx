import React from 'react';
import { Outlet } from 'react-router';
import Logo from './components/Logo';

import './scss/styles.scss'

const App = () => {
    return (
    <div className="container">
        <Logo />
        <Outlet />
    </div>
    );
}

export default App;
