import React from 'react';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll"

const Nav = () => (
    <nav className="nav">

        <ul className="top-nav">
            <li className='top'><Link to="/login">Login</Link></li>
            <li className='top'><Link to="/signup">Sign up</Link></li>
        </ul>

        <ul className="bottom-nav">
            <li><Link exact to="/">Start</Link></li>
            <li><ScrollLink to="howitworks" smooth={true} offset={50} duration={500}>How it works?</ScrollLink></li>
            <li><ScrollLink to="aboutus" smooth={true} offset={50} duration={500}>About us</ScrollLink></li>
            <li><ScrollLink to="charities" smooth={true} offset={50} duration={500}>Charities</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} offset={50} duration={500}>Contact</ScrollLink></li>
        </ul>

    </nav>
);

export default Nav;