import React from "react";
import { Link } from "react-router-dom";

const MailSuccess = ()=> {
    return(
        <React.Fragment>
        {/* // <!-- Start Breadcrumbs --> */}
		<section id="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<h2>Mail Success</h2>
						<ul className="bread-list">
							<li><Link to="/">Home</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</section>

        {/* // <!-- Mail Success --> */}
        <section id="mail" className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Your mail has received successfully</h2>
                    <p>I'll contact with you as soon as possible</p>
                    <Link to="/contact" className="btn shine"><i className="fa fa-angle-double-left"></i>Go Back</Link>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
    )
}

export default MailSuccess;