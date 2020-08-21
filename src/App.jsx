import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import './assets/scss/global.scss';


const App = () => {
    return (
        <div>
            <Header id='section1' title='section1' />
            <About id='section2' title='section2' />
            <Portfolio id='section3' title='section3' />
            <Services id='section4' title='section4' />
            <Contact id='section4' title='section4' />
            <Footer />
        </div>
    )
};

export default App