// Include React
import React, { Component }from "react";

// import components 
import Skill from "./grandchildren/Skill";

// Create Aboutme className
class AboutMe extends Component {
    constructor(props){
        super(props) 
    }

    render(){
        if(this.props.mainComponent == "main"){
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
                                                        <p>Welcome to my website. sit amet, consectetur adipiscing elit. Ut a lectus eu leo faucibus aliquam. Suspendisse eleifend fringilla nibh. Praesent ut luctus dolor. Suspendisse a rutrum arcu. Aliquam erat volutpat. Phasellus lobortis erat vitae fringilla malesuada. Fusce semper purus suscipit ultricies tincidunt. Nulla eget turpis ac leo euismod pharetra at nec diam. Etiam id purus lacus. Suspendisse ligula nulla, cursus non lacinia tincidunt, elementum eu sapien. Morbi mollis congue fringilla. Vivamus ac sagittis nunc.</p>
                                                        <p>Welcome to my website. sit amet, consectetur adipiscing elit. Ut a lectus eu leo faucibus aliquam. Suspendisse eleifend fringilla nibh. Praesent ut luctus dolor. Suspendisse a rutrum arcu. Aliquam erat volutpat. Phasellus lobortis erat vitae fringilla malesuada. Fusce semper</p>
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
        } else {
            return(<div/>)
        }
    }
}

export default AboutMe;