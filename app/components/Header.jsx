// Include React
import React, { Component }from "react";

// Include links
import { Link } from "react-router-dom";

// Create class Header
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSocialOpened: false
        }
    }
    onSocialClick(){
        this.setState({isSocialOpened: !this.state.isSocialOpened})
    }

    render(){
        const { isSocialOpened }  = this.state;
        const { location } = this.props;
        return(
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            {/* <!-- Logo --> */}
                            <div className="logo">
                                <a id="name" href="/"><span>&lt;</span>Kotchaparn Wongkor<span>	/&gt;</span></a>
                            </div>
                            {/* <!--/ End Logo --> */}
                            <div className="mobile-nav"></div>
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="nav-area">
                                {/* <!-- Header Menu --> */}
                                <nav className="Headermenu">
                                    <div className="collapse navbar-collapse">
                                        <ul className="nav navbar-nav menu">
                                            <li className={location == '/'? "active": ""}>
                                                <Link to="/"><i className="fa fa-home"></i>About Me</Link></li>
                                            <li className={location == '/portfolio'? "active": ""}>
                                                <Link to="portfolio"><i className="fa fa-briefcase"></i>Portfolio</Link></li>
                                            <li className={location == '/timeline'? "active": ""}>
                                                <Link to="timeline"><i className="fa fa-history"></i>Timeline</Link></li>
                                            <li className={location == '/contact'? "active": ""}>
                                                <Link to="contact"><i className="fa fa-address-book"></i>Contact</Link></li>
                                            <li className={location == '/portal'? "active": ""}>
                                                <Link to="portal"><i className="fa fa-lock"></i>Portal</Link></li>	
                                        </ul>
                                        <ul className="social-icon">
                                            <li><a
                                            onClick={this.onSocialClick.bind(this)}
                                            href="#header">
                                            <i className="fa fa-plus"></i>
                                            </a></li>
                                        </ul>
                                        <ul className={isSocialOpened? "social active" : "social"}>
                                            <li><a href="https://www.linkedin.com/in/kotchaparn-wongkor"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="https://github.com/kotchaparn-w"><i className="fab fa-github"></i></a></li>
                                            <li><a href="mailto:kotchaparn.w@gmail.com"><i className="fa fa-envelope"></i></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;