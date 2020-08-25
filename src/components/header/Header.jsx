import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";

import './header.scss';
const Header = ({position}) => {
    return (
        <header className='header-bg' id='home'>
            <Navbar expand="lg" fixed="top" className={position ? 'bg-light px-5' : 'bg-blue px-5'}>
                <Navbar.Brand href="#home" className={position ? '' : 'text-light'}>Georges Guelton</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={position ? '' : 'bg-light'} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="#home" to="home" spy={true}  activeClass="active" className={position ? 'nav-link' : 'nav-link text-light'}>Home</Link>
                        <Link href="#about" to="about" spy={true}  activeClass="active" className={position ? 'nav-link' : 'nav-link text-light'}>About</Link>
                        <Link href="#portfolio" to="portfolio" spy={true}  activeClass="active" className={position ? 'nav-link' : 'nav-link text-light'}>Portfolio</Link>
                        <Link href="#services" to="services" spy={true}  activeClass="active" className={position ? 'nav-link' : 'nav-link text-light'}>Services</Link>
                        <Link href="#contact" to="contact" spy={true}  activeClass="active" className={position ? 'nav-link' : 'nav-link text-light'}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='padding-top-header-content'>
                <h1 className='text-light text-center'>Georges Guelton</h1>
                <h2 className='text-light text-center'>Web Developer</h2>
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