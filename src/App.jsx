import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

import './assets/scss/global.scss';


const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Portfolio />
        </div>
    )
};

export default App