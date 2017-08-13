// Include React
import React, { Component } from "react";

// Create Timeline className
class Timeline extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        if(this.props.mainComponent == "timeline"){
            return(
                <section id="my-timeline" className="section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-title">
                                    <h1><span>Work & </span>Education<i className="fa fa-history"></i></h1>
                                    <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old</p>
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
                                                        <p>Jan<span>10</span></p>
                                                    </div>
                                                    <h2>High School Degree</h2>
                                                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam efficitur ultricies elit, eget ullamcorper enim scelerisque sit amet. Pellentesque blandit venenatis rhoncus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInRight" data-wow-delay="0.6s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Dec<span>12</span></p>
                                                    </div>
                                                    <h2>Start Web Design</h2>
                                                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam efficitur ultricies elit, eget ullamcorper enim scelerisque sit amet. Pellentesque blandit venenatis rhoncus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInLeft" data-wow-delay="0.4s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Jan<span>13</span></p>
                                                    </div>
                                                    <h2>Join University</h2>
                                                    <p>Starting College DayInterdum et malesuada fames ac ante ipsum primis in faucibus. Etiam efficitur ultricies elit, eget ullamcorper enim scelerisque sit amet. Pellentesque blandit venenatis rhoncus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInRight" data-wow-delay="0.6s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Feb<span>16</span></p>
                                                    </div>
                                                    <h2>Start Web Developments</h2>
                                                    <p>Learn Web Developments Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam efficitur ultricies elit, eget ullamcorper enim scelerisque sit amet. Pellentesque blandit venenatis rhoncus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/ End Single Timeline --> */}
                                        {/* <!-- Single Timeline --> */}
                                        <div className="single-main wow fadeInLeft" data-wow-delay="0.4s">
                                            <div className="single-timeline">
                                                <div className="single-content">
                                                    <div className="date">
                                                        <p>Jan<span>17</span></p>
                                                    </div>
                                                    <h2>Complete Graduations</h2>
                                                    <p>Just Receive my Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam efficitur ultricies elit, eget ullamcorper enim scelerisque sit amet. Pellentesque blandit venenatis rhoncus.</p>
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
        }else{
            return(<div/>)
        }
    }
}

export default Timeline;