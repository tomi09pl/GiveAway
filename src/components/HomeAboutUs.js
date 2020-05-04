import React from "react";

import Decoration from "./Decoration";
import signature from '../assets/Signature.svg'

const HomeAboutUs = () => (
    <div className="HomeAboutUs-wrapper" name='aboutus'>
        <div className="aboutUs-content">
            <h2>About us</h2>
            <Decoration/>
            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <img className='aboutUs-signature' src={signature} alt="CEO signature"/>
        </div>
        <div className="aboutUs-img"></div>
    </div>
);

export default HomeAboutUs;