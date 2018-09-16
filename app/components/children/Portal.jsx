import React, { Component } from "react";

class Portal extends Component {

    render(){
        return(
            <React.Fragment>
                <section id="portal" className="section">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-title">
                                    <h1><span>portal</span><i className="fa fa-lock"></i></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog" className="section archive single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="list">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            {/* <!-- Single Blog --> */}
                                            <div className="single-blog">
                                                <div className="blog-head">
                                                    <img src="http://via.placeholder.com/1200x800" className="img-responsive" />
                                                </div>
                                            </div>						
                                        </div>	
                                    </div>	
                                </div>	
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Portal;