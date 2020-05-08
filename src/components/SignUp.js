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
            secondPassword:'',
            errors: {
                email: false,
                password: false,
                secondPassword: false
            }
        }

    }

    render() {
        return (
            <div>
                <div className='login-nav'>
                    <Nav/>
                </div>
                <div className='login-wrapper'>
                    <p>Create new account</p>
                    <Decoration/>
                    <div className="login-form">
                        <form>
                            <div className="login-inputs">
                                <div className="txtField">
                                    <label htmlFor="loginEmail">Email</label>
                                    <input type="text" placeholder='' name='email'
                                           value={this.state.email} onChange={this.handleChange}
                                           // className={this.state.errors.name ? 'input-error' : ''}
                                    />
                                    {/*{this.state.errors.name && <span className='input-error-txt'>Name is incorrect!</span>}*/}
                                </div>
                                <div className="txtField">
                                    <label htmlFor="loginPassword">Password</label>
                                    <input type="text" placeholder='' name='password'
                                           value={this.state.password} onChange={this.handleChange}
                                           // className={this.state.errors.email ? 'input-error' : ''}
                                    />
                                    {/*{this.state.errors.email && <span className='input-error-txt'>Email is incorrect!</span>}*/}
                                </div>
                                <div className="txtField">
                                    <label htmlFor="secondPassword">Repeat password</label>
                                    <input type="text" placeholder='' name='secondPassword'
                                           value={this.state.secondPassword} onChange={this.handleChange}
                                        // className={this.state.errors.email ? 'input-error' : ''}
                                    />
                                    {/*{this.state.errors.email && <span className='input-error-txt'>Email is incorrect!</span>}*/}
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

}