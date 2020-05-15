

import React from 'react';
import {Link} from 'react-router-dom';

import Decoration from "./Decoration";
import Nav from './Nav'

const Header = () => (
    <div className="header">

        <Nav/>
        <div className="header-wrapper">
            <div className="headerImg"></div>
            <div className="header-callToAction">
                <p>Start helping!</p>
                <p>Donate your spare items into good hands</p>
                <Decoration/>
                <ul className='headerButtons'>
                    <li><Link to='/login'>DONATE<br/>ITEMS</Link></li>
                    <li><Link to='/login'>ORGANISE COLLECTION</Link></li>
                </ul>
            </div>
        </div>


    </div>
);

export default Header;