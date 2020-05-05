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
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('polecialo!');
        const {name, value} = e.target;
        let errors = this.state.errors;

        //RegEx cases//
        let nameRegex=/^[a-zA-Z]{1,40}$/;
        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let messageRegex=/^.{120,1000}$/;
        //=========//

        switch (name) {
            case 'name':
                console.log(nameRegex.test(value));
                errors.name = nameRegex.test(value);
                break;

            case 'email':
                console.log(emailRegex.test(value));
                errors.name = emailRegex.test(value);
                break;

            case 'message':
                console.log(messageRegex.test(value));
                errors.name = messageRegex.test(value);
                break;

            default:
                break;
        }

        this.setState ({
            errors, [name]: value,}, ()=>{console.log(errors)})

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
                            <div className="contact-details">
                                <div className="txtField">
                                    <label htmlFor="contactName">Enter your name</label>
                                    <input type="text" placeholder='Name' name='name'
                                           value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="txtField">
                                    <label htmlFor="contactEmail">Enter your e-mail</label>
                                    <input type="text" placeholder='yourEmail@mail.com' name='email'
                                           value={this.state.email} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="contact-content">
                                <label htmlFor="contactMessage">Enter your message</label>
                                <textarea placeholder='Please start typing your message here...' name='message'
                                          value={this.state.message} onChange={this.handleChange}/>
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