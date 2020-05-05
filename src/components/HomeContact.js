import React from "react";

import Decoration from "./Decoration";

export default class HomeContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                                    <input type="email" placeholder='yourEmail@mail.com' name='email'
                                           value={this.state.email} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="contact-content">
                                <label htmlFor="contactMessage">Enter your message</label>
                                <textarea placeholder='Please start typing your message here...' name='message'
                                          onChange={this.handleChange}/>
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