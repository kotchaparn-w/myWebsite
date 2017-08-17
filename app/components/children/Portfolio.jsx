// Include React
import React, { Component } from "react";

// Create Portfolio class
class Portfolio extends Component {

    render(){
        return(
            <section id="portfolio" className="section">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="section-title">
							<h1><span>My</span> Portfolio<i className="fa fa-briefcase"></i></h1>
						</div>
					</div>
				</div>
						
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						{/* <!-- portfolio Nav --> */}
						<div className="portfolio-nav">
							<ul>
								<li className="active" data-filter="*"><span>06</span><i className="fa fa-tasks"></i>All Works</li>
								<li data-filter=".development"><span>03</span><i className="fa fa-pencil"></i>Web Applicationt</li>
								<li data-filter=".html5"><span>03</span><i className="fa fa-html5"></i>SEO</li>
								<li data-filter=".wordpress"><span>02</span><i className="fa fa-wordpress"></i>Wordpress</li>
							</ul>
						</div>
						{/* <!--/ End portfolio Nav --> */}
					</div>
				</div>
						
				<div className="portfolio-inner">
					<div className="row stylex">	
						<div className="isotop-active">
							{/* <!-- Single portfolio --> */}
							<div className="mix development html5 col-md-4 col-sm-6 col-xs-12 col-fix ">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="http://via.placeholder.com/1500x1000" alt=""/>
									</div>
									<div className="portfolio-hover">
										<h4><span>Web Design</span><a href="#">Project Name Here</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum tincidunt vulputate. </p>
										<div className="button">
											<a data-fancybox="gallery" href="http://via.placeholder.com/1500x1000"><i className="fa fa-search"></i></a>
											<a href="#" className="primary"><i className="fa fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio -->					 */}
							{/* <!-- Single portfolio --> */}
							<div className="mix development col-md-4 col-sm-6 col-xs-12 col-fix">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="http://via.placeholder.com/1500x1000" alt=""/>
									</div>
									<div className="portfolio-hover">
										<h4><span>Html Website</span><a href="#">Project Name Here</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum tincidunt vulputate. </p>
										<div className="button">
											<a data-fancybox="gallery" href="http://via.placeholder.com/1500x1000"><i className="fa fa-search"></i></a>
											<a href="portfolio-single.html" className="primary"><i className="fa fa-link"></i></a>
										</div> 
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio --> */}
						
							{/* <!-- Single portfolio --> */}
							<div className="mix wordpress html5 col-md-4 col-sm-6 col-xs-12 col-fix">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="http://via.placeholder.com/1500x1000" alt=""/>
									</div>
									<div className="portfolio-hover">
										<h4><span>Wordpress</span><a href="#">Project Name Here</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum tincidunt vulputate. </p>
										<div className="button">
											<a data-fancybox="gallery" href="http://via.placeholder.com/1500x1000"><i className="fa fa-search"></i></a>
											<a href="portfolio-single.html" className="primary"><i className="fa fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio --> */}
							{/* <!-- Single portfolio --> */}
							<div className="mix wordpress col-md-4 col-sm-6 col-xs-12 col-fix">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="http://via.placeholder.com/1500x1000" alt=""/>
									</div>
									<div className="portfolio-hover">
										<h4><span>Wordpress</span><a href="#">Project Name Here</a></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum tincidunt vulputate. </p>
										<div className="button">
											<a data-fancybox="gallery" href="http://via.placeholder.com/1500x1000"><i className="fa fa-search"></i></a>
											<a href="portfolio-single.html" className="primary"><i className="fa fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio -->	 */}			
						</div>
					</div>
				</div>
			</div>
		</section>
		)
    }
}

export default Portfolio