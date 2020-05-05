import React from "react";

import fb from '../assets/Facebook.svg';
import inst from '../assets/Instagram.svg';

const Footer = () => (
    <div className='footer'>

        <div className='footer-txt'>
            <p>Copyright by Tomasz Kawalek</p>
        </div>

        <div className="icons">
            <img src={fb} alt="Facebook link"/>
            <img src={inst} alt="Instagram link"/>
        </div>
    </div>
);

export default Footer;