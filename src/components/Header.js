

import React from 'react';
import {Link} from 'react-router-dom';

import Decoration from "./Decoration";
import Nav from './Nav'

const Header = () => (
    <div className="header">

        <div className="headerImg"></div>
        <Nav/>
        <div className="costam">
            <p>Start helping!</p>
            <p>Donate your unwanted stuff into good hands</p>
            <Decoration/>
            <ul className='headerButtons'>
                <li><Link to='/login'>DONATE STUFF</Link></li>
                <li><Link to='/login'>ORGANISE COLLECTION</Link></li>
            </ul>
        </div>


    </div>
);

export default Header;