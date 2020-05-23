import React from 'react';
import './Navbar.css';

const Navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div className="navbar__logo"><a href="#home">RADIATE</a></div>
            <div className="spacer" />
            <div className="navbar_navigation-items">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#downloads">Downloads</a></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default Navbar;
