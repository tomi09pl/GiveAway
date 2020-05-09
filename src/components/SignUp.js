import React from "react";
import {Link} from 'react-router-dom';

import Decoration from "./Decoration";
import Nav from "./Nav";


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email:'',
            password:'',
            password2:'',
            errors: {
                email: false,
                password: false,
                password2: false
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
                case 'password2':
                errors.password2 = false;
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

        let errors = {email: false, password: false};
        let hasErrors = false;

        //RegEx cases//
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let passwordRegex = /^.{6,}$/;
        //=========//

        if (!emailRegex.test(this.state.email)) {
            errors.email = true;
            hasErrors = true
        }

        if (!passwordRegex.test(this.state.password)) {
            errors.password = true;
            hasErrors = true
        }

        if (this.state.password2 !== this.state.password) {
            errors.password2 = true;
            hasErrors = true;
        }

        this.setState({
            errors: errors,
            successFlag: false
        });

        if (!hasErrors) {
            console.log('...:::USER SIGNED UP:::...');
            this.setState({
                email:'',
                password:'',
                password2:''
            })
        }
    };

        render()
        {
            return (
                <div>
                    <div className='login-nav'>
                        <Nav/>
                    </div>
                    <div className='login-wrapper'>
                        <p>Create new account</p>
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
                                        {this.state.errors.email &&
                                        <span className='input-error-txt'>Email is incorrect!</span>}
                                    </div>
                                    <div className="txtField">
                                        <label htmlFor="loginPassword">Password</label>
                                        <input type="password" placeholder='' name='password'
                                               value={this.state.password} onChange={this.handleChange}
                                               className={this.state.errors.password ? 'input-error' : ''}
                                        />
                                        {this.state.errors.password &&
                                        <span className='input-error-txt'>Password must have at least 6 characters!</span>}
                                    </div>
                                    <div className="txtField">
                                        <label htmlFor="secondPassword">Confirm password</label>
                                        <input type="password" placeholder='' name='password2'
                                               value={this.state.password2} onChange={this.handleChange}
                                               className={this.state.errors.password2 ? 'input-error' : ''}
                                        />
                                        {this.state.errors.password2 &&
                                        <span className='input-error-txt'>Passwords need to match!</span>}
                                    </div>
                                </div>

                                <div className="login-buttons contact-submit">
                                    <Link to='/login'>Log in</Link>
                                    <input type="submit" value='Sign up'/>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            )
        }
    };
