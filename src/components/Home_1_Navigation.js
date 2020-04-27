

import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => (
    <nav className="nav">

        <ul className="top-nav">
            <li className='top'><Link to="/login">Login</Link></li>
            <li className='top'><Link to="/signup">Sign up</Link></li>
        </ul>

        <ul className="bottom-nav">
            <li><Link exact to="/">Start</Link></li>
            <li><Link to="/howitworks">How it works?</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/charities">Charities</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

    </nav>
);

export default Navigation;