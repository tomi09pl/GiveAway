import React from "react";
import {Link} from 'react-router-dom';

import Decoration from "./Decoration";
import Nav from "./Nav";


export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email:'',
            password:'',
            errors: {
                email: false,
                password: false
            }
        }

    }

    handleChange = (e) => {

        let errors = this.state.errors;

        switch (e.target.name) {
            case 'email':
                errors.email = false;
                break;
            case 'password':
                errors.password = false;
                break;
            default:
                break;
        }

        this.setState({
            [e.target.name]: e.target.value,
            errors: errors
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('polecialo!');
        let errors = {name:false, email:false, message:false};
        let hasErrors = false;

        //RegEx cases//
        // let nameRegex=/^[a-zA-Z]{1,40}$/;
        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let passwordRegex=/^.{6}$/;
        //=========//

        if (!emailRegex.test(this.state.email)){
            errors.email = true;
            hasErrors = true
        }

        if (!passwordRegex.test(this.state.password)){
            errors.password = true;
            hasErrors = true
        }

        this.setState({
            errors: errors,
            successFlag: false
        });

        // if (!hasErrors){
        //     const data = {name: this.state.name, email: this.state.email, message: this.state.message};
        //
        //     fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        //         method: 'POST',
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify(data)
        //     }).then (resp => {
        //         return resp.json();
        //     }).then(data => {
        //             this.setState({
        //                 successFlag: true,
        //                 name: '',
        //                 email: '',
        //                 message: ''
        //             });
        //             console.log(data)
        //         }
        //     ).catch(err => {
        //         console.log(err)
        //     });
        // }

    };

    render() {
        return (
            <div>
                <div className='login-nav'>
                    <Nav/>
                </div>
                <div className='login-wrapper'>
                    <p>Please Log in</p>
                    <Decoration/>
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="login-inputs">
                                <div className="txtField">
                                    <label htmlFor="loginEmail">Email</label>
                                    <input type="text" placeholder='' name='email'
                                           value={this.state.email} onChange={this.handleChange}
                                           className={this.state.errors.email ? 'input-error' : ''}
                                    />
                                    {this.state.errors.email && <span className='input-error-txt'>Email is incorrect!</span>}
                                </div>
                                <div className="txtField">
                                    <label htmlFor="loginPassword">Password</label>
                                    <input type="password" placeholder='' name='password'
                                           value={this.state.password} onChange={this.handleChange}
                                           className={this.state.errors.password ? 'input-error' : ''}
                                    />
                                    {this.state.errors.email && <span className='input-error-txt'>Password must have at least 6 characters!</span>}
                                </div>
                            </div>

                            <div className="login-buttons contact-submit">
                                <Link to='/signup'>Sign up</Link>
                                <input type="submit" value='Log in'/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        )
    }

}