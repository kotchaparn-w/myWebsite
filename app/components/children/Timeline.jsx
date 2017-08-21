// Include React
import React, { Component } from "react";

// Create Timeline className
class Timeline extends Component {
    
    componentDidMount(){
        
        new WOW().init();
	}
    render(){
            return(
                <section id="my-timeline" className="section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-title">
                                    <h1><span>Work & </span>Education<i className="fa fa-history"></i></h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline">
                                    <div className="timeline-inner">
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInLeft" data-wow-delay="0.4s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Mar<span>11</span></p>
                                                    </div>
                                                    <h2>Bachelor's degree </h2>
                                                    <p>Graduated from Khon Kaen University, Thailand in International Business field.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInRight" data-wow-delay="0.6s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Apr<span>11</span></p>
                                                    </div>
                                                    <h2>Start Profession</h2>
                                                    <p>Worked with an international shipping company <br/><a href="http://www.oocl.com/thailand/eng/Pages/default.aspx">(OOCL Thailand Ltc.)</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInLeft" data-wow-delay="0.4s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Jan<span>12</span></p>
                                                    </div>
                                                    <h2>Change to I.T. Field</h2>
                                                    <p>Worked for an I.T. company <a href="http://www.itsolution.co.th/">(I.T. Solution Computer (Thailand) Co., Ltd)</a> as 3 different roles Purchase, Inventory and Marketing Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInRight" data-wow-delay="0.6s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Nov<span>15</span></p>
                                                    </div>
                                                    <h2>Move to U.S.</h2>
                                                    <p>Moved to Houston, TX</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                         {/* <!-- Single Timeline --> */}
                                         <div className="single-main wow fadeInLeft" data-wow-delay="0.4s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Feb<span>17</span></p>
                                                    </div>
                                                    <h2>Start Web Development</h2>
                                                    <p>Certificate, The Houston Coding Boot Camp – Full Stack Flex Program, The University of Texas at Austin – Center for Professional Education in Houston, TX.  </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInLeft" data-wow-delay="0.4s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>May<span>17</span></p>
                                                    </div>
                                                    <h2>Start Freelance</h2>
                                                    <p>While I was taking class with Houston Coding Boot Camp, I decided to change my carreer to work as a web developer help businesses achieve thier goals. </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
    }
}

export default Timeline;