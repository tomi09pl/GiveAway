import React from "react";

import Decoration from "./Decoration";

export default class HomeContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            errors: {
                name:false,
                email:false,
                message:false
            }
        }

    }

    handleChange = (e) => {

        let errors = this.state.errors;

        switch (e.target.name) {
            case 'name':
                errors.name = false;
                break;
            case 'email':
                errors.email = false;
                break;
            case 'message':
                errors.message = false;
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
        let nameRegex=/^[a-zA-Z]{1,40}$/;
        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let messageRegex=/^.{120,1000}$/;
        //=========//

        if (!nameRegex.test(this.state.name)){
            errors.name = true;
            hasErrors = true
        }

        if (!emailRegex.test(this.state.email)){
            errors.email = true;
            hasErrors = true
        }

        if (!messageRegex.test(this.state.message)){
            errors.message = true;
            hasErrors = true
        }

        this.setState({
            errors: errors,
            successFlag: false
        });

        if (!hasErrors){
            const data = {name: this.state.name, email: this.state.email, message: this.state.message};

            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }).then (resp => {
                return resp.json();
            }).then(data => {
                    this.setState({
                        successFlag: true,
                        name: '',
                        email: '',
                        message: ''
                    });
                    console.log(data)
                }
            ).catch(err => {
                console.log(err)
            });
        }

    };

    render() {
        return(
            <div className='contact-wrapper' name='contact'>
                <div className="contact-image"></div>
                <div className="contact-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="contact-header">
                            <h2>Get in touch</h2>
                            <Decoration/>
                            {this.state.successFlag && <h3 className='contact-success'>Your message has been sent!<br/>
                            We will reply shortly.</h3>}
                            <div className="contact-details">
                                <div className="txtField">
                                    <label htmlFor="contactName">Enter your name</label>
                                    <input type="text" placeholder='Name' name='name'
                                           value={this.state.name} onChange={this.handleChange}
                                           className={this.state.errors.name ? 'input-error' : ''}/>
                                    {this.state.errors.name && <span className='input-error-txt'>Name is incorrect!</span>}
                                </div>
                                <div className="txtField">
                                    <label htmlFor="contactEmail">Enter your e-mail</label>
                                    <input type="text" placeholder='yourEmail@mail.com' name='email'
                                           value={this.state.email} onChange={this.handleChange}
                                           className={this.state.errors.email ? 'input-error' : ''}/>
                                    {this.state.errors.email && <span className='input-error-txt'>Email is incorrect!</span>}
                                </div>
                            </div>
                            <div className="contact-content">
                                <label htmlFor="contactMessage">Enter your message</label>
                                <textarea placeholder='Please start typing your message here...' name='message'
                                          value={this.state.message} onChange={this.handleChange}
                                          className={this.state.errors.message ? 'input-error' : ''}/>
                                {this.state.errors.message && <span className='input-error-txt'>Minimum message length is 120 characters!</span>}
                            </div>
                            <div className="contact-submit">
                                <input type="submit" value='Send'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}