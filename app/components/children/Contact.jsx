// Include React
import React, { Component } from "react";

// Create className 
class Contact extends Component {
    componentDidMount(){
        $.getScript("js/wow-config.js");
	}
    render(){
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
                                <form className="form" method="post" action="mail/mail.php">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Full Name" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Your Email" required="required"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" rows="6" placeholder="Type Your Message Here" ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group button">	
                                                <button type="submit" className="button primary"><i className="fa fa-send"></i>Submit</button>
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