// Include React
import React, { Component } from "react";
import axios from 'axios';
import { AsYouType } from 'libphonenumber-js';
import PhoneInput from 'react-phone-number-input';

// Create className 
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: {
                value: "",
                isValid: true
            },
            email: {
                value: "",
                isValid: true
            },
            phone: {
                value: "",
                isValid: true
            },
            message: {
                value: "",
                isValid: true
            }, 
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {

        $.getScript("js/wow-config.js");
    }
    handleChange(event) {
        const {value, name } = event.target;
            this.setState({ [name] : Object.assign(this.state[name], { value }) });
    }

    handleSubmit(event) {
        event.preventDefault();
        let isEmptyFound = false;
        for (let props in this.state) {
            if (!this.state[props].value) {
                this.setState({ [props] : Object.assign(this.state[props], { isValid : false }) });
            } else if (this.state[props].value) {
                this.setState({ [props] : Object.assign(this.state[props], { isValid : true }) });
                isEmptyFound = false;
            }
        }

        for (let props in this.state) {
            if (!this.state[props].isValid){
                isEmptyFound = true;
            }
        }
        
        if(!isEmptyFound) {
            const { name: {value : name}, email : {value : email}, phone : {value : phone}, message : {value : message} } = this.state;
            axios.post('/contact', {
                name,
                email,
                phone,
                message
            })
            .then( res => console.log(res))
            .catch( err => console.log(err));
        }

    }

    render(){
        const { name, email, phone, message } = this.state;
            return(
                <section id="contact" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-title">
                                    <h1><span>Contact</span> Me<i className="fa fa-star"></i></h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* <!-- Contact Form --> */}
                            <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.4s">
                                <form className="form" >
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input 
                                                className={name.isValid == true ? "" : "is-invalid"}
                                                value={name.value}
                                                onChange={this.handleChange}
                                                type="text" 
                                                name="name" 
                                                placeholder="Full Name" 
                                                required="required"
                                                />
                                            </div>
                                            <div className="invalid-feedback">
                                            { name.isValid == false && 'Please provide your name' }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input 
                                                className={email.isValid == true ? "" : "is-invalid"}
                                                value={email.value}
                                                onChange={this.handleChange}
                                                type="email" 
                                                name="email" 
                                                placeholder="Your Email" 
                                                required="required"/>
                                            </div>
                                            <div className="invalid-feedback">
                                            { email.isValid == false && 'Please provide a valid email' }
                                            </div>       
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                placeholder="Your phone number"
                                                name="phone" 
                                                value={phone.value}
                                                onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="invalid-feedback">
                                            { phone.isValid == false && 'Please provide a valid phone number' }
                                            </div>       
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                className={message.isValid == true ? "" : "is-invalid"}
                                                value={message.value}
                                                onChange={this.handleChange}
                                                name="message" 
                                                rows="6" 
                                                placeholder="Type Your Message Here" >
                                                </textarea>
                                            </div>
                                             <div className="invalid-feedback">
                                             { message.isValid == false && 'Please provide your message' }
                                            </div> 
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group button">	
                                                <button 
                                                onClick={this.handleSubmit.bind(this)}
                                                type="submit" 
                                                className="button primary">
                                                <i className="fa fa-send"></i> Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <!--/ End Contact Form --> */}
                            {/* <!-- Contact Address --> */}
                            <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-delay="0.8s">
                                <div className="contact">
                                    {/* <!-- Single Address --> */}
                                    <div className="single-address">
                                        <i className="fa fa-phone"></i> 
                                        <div className="title">
                                            <h4>My Phone</h4>
                                            <p>+1-346-221-8709</p>
                                        </div>
                                    </div>
                                    {/* <!--/ End Single Address --> */}
                                    {/* <!-- Single Address --> */}
                                    <div className="single-address">
                                        <i className="fa fa-envelope"></i> 
                                        <div className="title">
                                            <h4>Email Address</h4>
                                            <p><a href="mailto:kotchaparn.w@gmail.com">kotchaparn.w@gmail.com</a></p>
                                        </div>
                                    </div>
                                    {/* <!--/ End Single Address --> */}
                                    {/* <!-- Single Address --> */}
                                    <div className="single-address">
                                        <i className="fa fa-map"></i> 
                                        <div className="title">
                                            <h4>My Location</h4>
                                            <p>Houston, TX <br/>United States</p>
                                        </div>
                                    </div>
                                    {/* <!--/ End Single Address --> */}
                                </div>
                            </div>
                            {/* <!--/ End Contact Address --> */}
                        </div>
                    </div>
                </section>
            )
            
    }
}

export default Contact;