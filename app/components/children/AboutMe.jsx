// Include React
import React, { Component }from "react";

// import components 
import Skill from "./grandchildren/Skill";

// Create Aboutme className
class AboutMe extends Component {

    render(){
        return(
            //  Start About Me
            <section id="about-me" className="section default">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="section-title">
                                <h1><span>About</span> Me<i className="fa fa-address-book-o"></i></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 fix">
                            {/* About Tab */}
                            <div className="tabs-main">
                                {/* Tab Menu  */}
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active"><span className="tooltips">About Me</span><a href="#welcome" role="tab" data-toggle="tab"><i className="fa fa-user"></i></a></li>
                                    <li role="presentation"><span className="tooltips">My Skill</span><a href="#skills" role="tab"  data-toggle="tab"><i className="fa fa-code"></i></a></li>
                                </ul>
                                {/* End Tab Menu */}
                                <div className="tab-content">
                                    {/* Single Tab */}
                                    <div role="tabpanel" className="tab-pane fade in active" id="welcome">
                                        <div className="about-text">
                                            <h2 className="tab-title">About Me</h2>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4 col-xs-12">
                                                    {/* About Image  */}
                                                    <div className="single-image">
                                                        <img src="img/Bell.jpg" alt=""/>
                                                    </div>
                                                </div>
                                                {/* End About Image */}
                                                <div className="col-md-8 col-sm-12 col-xs-12">
                                                    <div className="content">
                                                        <p>
                                                            Thank you for visiting and welcome my website. My international name is "Bell".<br/>
                                                            I am a biligual (Thai, Eng) Full-Stack web developer. I have been in United States since November 2015 from the beautiful country of "Thailand".<br/>
                                                            Coming to America helped me change my thoughts on many things, but most importantly it helped make my dream come true, which is becoming a web and software developer.
                                                        </p>
                                                        <p>
                                                            I'm currently working part-time as a freelancer, creating web applications and launching campaigns for companies. 
                                                            I am obsessed with getting work done flawlessly and driving business to success. 
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single Tab  */}
                                    <div role="tabpanel" className="tab-pane fade" id="skills">
                                        <h2 className="tab-title">My Skill</h2>
                                        <Skill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>	
        )
    }
}

export default AboutMe;