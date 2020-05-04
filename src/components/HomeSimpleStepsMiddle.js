import React from "react";

import icon1 from '../assets/Icon-1.svg'
import icon2 from '../assets/Icon-2.svg'
import icon3 from '../assets/Icon-3.svg'
import icon4 from '../assets/Icon-4.svg'


const myArr = [
    {icon: icon1, title: 'Choose items', desc:'clothes, toys, equipment and more'},
    {icon: icon2, title: 'Pack them', desc:'use bin bags'},
    {icon: icon3, title: 'Decide who do you want to help', desc:'choose trusted organisation'},
    {icon: icon4, title: 'Order a courier', desc:'courier collects at your convenience'}
];

const HomeSimpleStepsMiddle = () => (
    <div className="HomeSimpleStepsMiddle-wrapper" name='howitworks'>
        {myArr.map((el) => {
            return (
                <div className='step'>
                    <img src={el.icon} alt="Step icon"/>
                    <h3>{el.title}</h3>
                    <div className="divider"></div>
                    <p>{el.desc}</p>
                </div>
            )
        })}
    </div>
);

export default HomeSimpleStepsMiddle;