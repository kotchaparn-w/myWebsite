// Include React
import React, { Component } from "react";

// Create Footer class
class Footer extends Component {
	constructor(props){
		super(props)
		this.assignHref = this.assignHref.bind(this);
	}

	assignHref(){
		switch (this.props.location){
			case "/":
				return "#personal-area";
				break;
			case "/portfolio":
				return "#portfolio";
				break;
			case "/timeline":
				return "#my-timeline";
				break;
			case "/contact":
				return "#contact";
				break;
			default:
				return "#personal-area";
				break;
		}
	}
	
    render() {
        return(
            <footer id="footer">
			{/* <!-- Arrow --> */}
			<div className="arrow">
				<a href={this.assignHref()} className="btn"><i className="fa fa-angle-up"></i></a>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-sm-6 col-xs-12">
						{/* <!-- Copyright --> */}
						<div className="copyright">
							<p>&copy; Copyright 2017 Kotchaparn Wongkor</p>
						</div>
					</div>
					<div className="col-md-6 col-sm-6 col-xs-12">
						{/* <!-- Social --> */}
						<ul className="social">
							<li><a href="https://www.linkedin.com/in/kotchaparn-wongkor "><i className="fa fa-linkedin"></i></a></li>
							<li><a href="https://github.com/kotchaparn-w"><i className="fa fa-github"></i></a></li>
							<li><a href="mailto:kotchaparn.w@gmail.com"><i className="fa fa-envelope"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
        )
    }
}

export default Footer;