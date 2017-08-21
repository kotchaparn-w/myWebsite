// Include React
import React, { Component } from "react";

// Create Portfolio class
class Portfolio extends Component {

	componentDidMount(){
		function Maheraz_Custom_JS() {
			var windowS = $(window),
				windowH = windowS.height(),
				projecthoverS = $('.portfolio-hover'),
				projecthoverH = projecthoverS.height(),
				proejectdevide = (projecthoverH / 2);
				projecthoverS.css({
				marginTop: -proejectdevide,
			});
		}; 
		Maheraz_Custom_JS();	

		
			$('.portfolio-nav ul li').on('click', function() {
			$(".portfolio-nav ul li").removeClass("active");
			$(this).addClass("active");

			var selector = $(this).attr('data-filter');
			$(".isotop-active").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'easeInOutQuart',
					queue: false,
				}
			});
			return false;
		});

		$(".isotop-active").isotope({
			filter: '*',
		});
	}

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
								<li className="active" data-filter="*"><span>06</span><i className="fa fa-tasks"></i>All Projects</li>
								<li data-filter=".auth"><span>01</span><i className="fa fa-lock"></i>Authentication</li>
								<li data-filter=".react"><span>02</span><i className="fa fa-code"></i>ReactJS</li>
								<li data-filter=".SPA"><span>04</span><i className="fa fa-html5"></i>Single-Page Application</li>
								<li data-filter=".SEO"><span>01</span><i className="fa fa-line-chart"></i>SEO & Marketing</li>
							</ul>
						</div>
						{/* <!--/ End portfolio Nav --> */}
					</div>
				</div>
						
				<div className="portfolio-inner">
					<div className="row stylex">	
						<div className="isotop-active">
							{/* <!-- Single portfolio --> */}
							<div className="mix react SPA col-md-4 col-sm-6 col-xs-12 col-fix ">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="../img/bell_portfolio.png" alt="Bell's Portfolio"/>
									</div>
									<div className="portfolio-hover">
										<h4><span>Web Design</span><a href="#">My Portfolio</a></h4>
										<p>A single-page application built on ReactJS gives users utter experience with "react-router".</p>
										<div className="button">
											<a data-fancybox="gallery" href="../img/bell_portfolio.png"><i className="fa fa-search"></i></a>
											<a href="https://kotchaparnwongkor.me" className="primary"><i className="fa fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio -->					 */}
							{/* <!-- Single portfolio --> */}
							<div className="mix MongDB SPA col-md-4 col-sm-6 col-xs-12 col-fix">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="../img/mongo_project.png" alt="MongoDB Project"/>
									</div>
									<div className="portfolio-hover">
										<h4><span>MongoDB Database</span><a href="#">ScrapDatNews</a></h4>
										<p>An application that allows users to seach news in this case using NYT Api. MongoDB was used as a primary database and Mongoose as ORM. </p>
										<div className="button">
											<a data-fancybox="gallery" href="../img/mongo_project.png"><i className="fa fa-search"></i></a>
											<a href="https://shielded-crag-69766.herokuapp.com/" className="primary"><i className="fa fa-link"></i></a>
										</div> 
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio --> */}
							{/* <!-- Single portfolio --> */}
							<div className="mix auth col-md-4 col-sm-6 col-xs-12 col-fix">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="../img/project_we.png" alt="WE Project"/>
									</div>
									<div className="portfolio-hover">
										<h4><span>Authentication</span><a href="#">Project WE</a></h4>
										<p>An application that allows users to search for air quality by the city name. Passport.JS was used for authentication. </p>
										<div className="button">
											<a data-fancybox="gallery" href="../img/project_we.png"><i className="fa fa-search"></i></a>
											<a href="https://shrouded-garden-40780.herokuapp.com/" className="primary"><i className="fa fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio -->	 */}
							{/* <!-- Single portfolio --> */}
							<div className="mix react MongoDB SPA col-md-4 col-sm-6 col-xs-12 col-fix">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="../img/react_project.png" alt="React Application"/>
									</div>
									<div className="portfolio-hover">
										<h4><span>ReactJS</span><a href="#">NYT Article Scrubber</a></h4>
										<p>A single page application that allows users to get the news from NYT and save, delete and add notes. ReactJS was used as JS framework and MongoDB as database.</p>
										<div className="button">
											<a data-fancybox="gallery" href="../img/react_project.png"><i className="fa fa-search"></i></a>
											<a href="https://warm-badlands-47467.herokuapp.com/" className="primary"><i className="fa fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio --> */}	
							{/* <!-- Single portfolio --> */}
							<div className="mix SEO col-md-4 col-sm-6 col-xs-12 col-fix">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="../img/txltc.png" alt="TXLTC"/>
									</div>
									<div className="portfolio-hover">
										<h4><span>Wix</span><a href="#">TXLTC</a></h4>
										<p>Create a website and launch a campaign using Google Adwords to increase invisitors and potential leads for a business. </p>
										<div className="button">
											<a data-fancybox="gallery" href="../img/txltc.png"><i className="fa fa-search"></i></a>
											<a href="https://www.txltc.com/" className="primary"><i className="fa fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio -->	 */}		
							{/* <!-- Single portfolio --> */}
							<div className="mix MySQL SPA col-md-4 col-sm-6 col-xs-12 col-fix">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="../img/sequelized_project.png" alt="Sequelize Project"/>
									</div>
									<div className="portfolio-hover">
										<h4><span>MySQL Database</span><a href="#">Sequelized Burger</a></h4>
										<p>An application that allows users to add and delete bugers and customers. MySQL was used to be the main database and sequelized to be ORM. </p>
										<div className="button">
											<a data-fancybox="gallery" href="../img/sequelized_project.png"><i className="fa fa-search"></i></a>
											<a href="https://salty-plateau-79246.herokuapp.com/" className="primary"><i className="fa fa-link"></i></a>
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