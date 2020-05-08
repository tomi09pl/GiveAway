import React from "react";
import {Link} from 'react-router-dom';

import Decoration from "./Decoration";
import Nav from "./Nav";


export default class LogOut extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='login-nav'>
                    <Nav/>
                </div>
                <div className='login-wrapper'>
                    <p>You have been logged out<br/>successfully!</p>
                    <Decoration/>
                    <div className="login-form">
                            <div className="login-buttons contact-submit logout-button">
                                <Link to='/'>Back to Start</Link>
                            </div>
                    </div>

                </div>
            </div>
        )
    }

}