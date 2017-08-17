// Include React
import React, { Component } from "react";

// Create Jumbotron class
class Jumbotron extends Component {

    render() {
			return(
					<section id="personal-area" className="particle">
						{/*  Start Personal Area */}
						<div id="particles-js"></div> 
						<div className="table">  
							<div className="table-cell">
								<div className="personal-main">
									<div className="personal-single">
										<div className="container">
											<div className="row">
												<div className="col-md-12 col-sm-12 col-xs-12">
													{/* Personal Text */}
													<div className="personal-text">
														<div className="my-info">
															<h1>Kotchaparn <span id="lastname">Wongkor</span></h1>
															<h2 className="cd-headline clip is-full-width">
															A Proffesional&nbsp;
																<span className="cd-words-wrapper">
																	<b className="is-visible">UI/UX DESIGNER</b>
																	<b>Web Developer</b>
																	<b>Markering Analyst</b>
																	<b>Programmer</b>
																</span>
															</h2>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*Arrow  */}
								<div className="arrow">
									<a href="#about-me"><i className="fa fa-angle-down"></i></a>
								</div>
							</div>
						</div>
					</section>
			);
	}
}
// Export Jumbotron
export default Jumbotron;