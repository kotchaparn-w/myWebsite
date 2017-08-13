// Include React
import React, { Component }from "react";

// Create class Header
class Header extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        /*====================================
        // Sticky JS
        ======================================*/ 
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 1) {
                $('#header').addClass("sticky");
            } else {
                $('#header').removeClass("sticky");
            }
        });

        /*====================================
        // 	Social JS
        ======================================*/ 	
        $('.social-icon li a').on( "click", function(){
            $('.social').toggleClass('active');
        });
    }

    // Handle clicking nav links
    handleClick(link){
        event.preventDefault();
        // set its parent state
        this.props.setMainComponent(link);
    }

    render(){
        return(
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            {/* <!-- Logo --> */}
                            <div className="logo">
                                <a id="name" href="#"><span>&lt;</span> Kotchaparn Wongkor<span>	/&gt;</span></a>
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
                                            <li className={this.props.mainComponent == 'main'? "active": ""}>
                                                <a href="#" onClick={()=>this.handleClick('main')}>
                                                    <i className="fa fa-home"></i>Bell's Homepage</a></li>
                                            <li className={this.props.mainComponent == 'portfolio'? "active": ""}>
                                                <a href="#" onClick={()=>this.handleClick('portfolio')}>
                                                    <i className="fa fa-briefcase"></i>Portfolio</a></li>
                                            <li className={this.props.mainComponent == 'timeline'? "active": ""}>
                                                <a href="#" onClick={()=>this.handleClick('timeline')}>
                                                    <i className="fa fa-history"></i>Timeline</a></li>
                                            <li className={this.props.mainComponent == 'contact'? "active": ""}>
                                                <a href="#" onClick={()=>this.handleClick('contact')}>
                                                    <i className="fa fa-address-book"></i>Contact</a></li>	
                                        </ul>
                                        <ul className="social-icon">
                                            <li><a href="#header"><i className="fa fa-plus"></i></a></li>
                                        </ul>
                                        <ul className="social">
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-github"></i></a></li>
                                            <li><a href="#"><i className="fa fa-envelope"></i></a></li>
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