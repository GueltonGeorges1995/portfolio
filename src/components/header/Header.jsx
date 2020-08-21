import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from "react-scroll";

import './header.scss';
const Header = () => {

 const [positionScroll, setPositionScroll] = useState(window.scrollY)   

useEffect(() => {
    setPositionScroll(window.scrollY)
    console.log('hi');
}, [positionScroll])

    return (
        <header className='header-bg' id='home'>
            <Navbar bg="light" expand="lg" fixed="top" className='px-5'>
                <Navbar.Brand href="#home">Georges Guelton</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="#home" to="home" spy={true}  activeClass="active" className='nav-link'>Home</Link>
                        <Link href="#about" to="about" spy={true}  activeClass="active" className='nav-link'>About</Link>
                        <Link href="#portfolio" to="portfolio" spy={true}  activeClass="active" className='nav-link'>Portfolio</Link>
                        <Link href="#services" to="services" spy={true}  activeClass="active" className='nav-link'>Services</Link>
                        <Link href="#contact" to="contact" spy={true}  activeClass="active" className='nav-link'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='padding-top-header-content'>
                <h1 className='text-light text-center'>Georges Guelton</h1>
                <h2 className='text-light text-center'>Web Developer</h2>
                {/* <button onClick={()=>console.log( window.scrollY)}>test</button> */}
            </div>
            <div className='text-center position-header-arrow arrow-size'>
                <a href="#about">
                    <i className="fas fa-arrow-down text-light text-center"></i>
                </a>
            </div>
        </header>
    )
};
export default Header;