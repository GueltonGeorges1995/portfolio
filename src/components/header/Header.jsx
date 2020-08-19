import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './header.scss';

const Header = () => {
    return (
        <header className='header-bg' id='home'>
            <Navbar bg="light" expand="lg" fixed="top" className='px-5'>
                <Navbar.Brand href="#home">Georges Guelton</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
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