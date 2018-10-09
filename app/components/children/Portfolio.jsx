// Include React
import React, { Component } from "react";
import axios from 'axios';
import Isotope from 'isotope-layout';
import ReactDOM from "react-dom";


// Create Portfolio class
class Portfolio extends Component {
	constructor(props){
		super(props)
		this.state = {
			projects: [],
			categories:[
				{
					type: "all",
					fa: "fa fa-tasks",
					total: 6
				},
				{
					type: "authentication",
					fa: "fa fa-lock",
					total: 1
				},
				{
					type: "react",
					fa: "fa fa-code",
					total: 2
				},
				{
					type: "single-page-applications",
					fa: "fa fa-html5",
					total: 4
				},
				{
					type: "SEO",
					fa: "fa fa-line-chart",
					total: 1
				}
			],
			activeFilter: "all"
		}
		this.handleCatClick = this.handleCatClick.bind(this);
		this.iso = null;
	}

	componentDidMount(){
		this.iso = new Isotope(ReactDOM.findDOMNode(this.refs.isotopeContainer))
		this.iso.arrange({filter:"*"});
		axios.get('/project')
        .then(result => {
            const { projects } = result.data;
            if(result.data.projects) {
                this.setState({ projects });
            } 
        })
		.catch(err => console.log(err))
	}
	handleCatClick(event){
		
		const { value } = event.target.dataset;
		this.iso.arrange({ filter: `.${value}` });
		this.setState({ activeFilter : value });
	}
	renderCategories(category, i){
		const { type, fa, total } = category;
			return(
				<li key={i}
				data-value={type}
				onClick={this.handleCatClick}
				className={type === this.state.activeFilter ? "active" : ""}
				>
				<span>{total}</span>
				<i className={fa}></i>
				{type}
				</li>
			)
	}

    render(){
		console.log(this)
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
						<div className="portfolio-nav">
							<ul>
								{this.state.categories.map(this.renderCategories.bind(this))}
							</ul>
						</div>
					</div>
				</div>
						
				<div className="portfolio-inner">
					<div className="row stylex">	
						<div className="isotop-active" ref="isotopeContainer">
							{/* <!-- Single portfolio --> */}
							<div className="mix all react single-page-applications authentication col-md-4 col-sm-6 col-xs-12 col-fix ">
								<div className="portfolio-single">
									<div className="portfolio-head">
										<img src="../img/bell_portfolio.png" alt="Bell's Portfolio"/>
									</div>
									<div className="portfolio-hover">
										<h4><span>Web Design</span><a href="#">My Portfolio</a></h4>
										<p>A single-page application built on MERN stack.</p>
										<div className="button">
											<a data-fancybox="gallery" href="../img/bell_portfolio.png"><i className="fa fa-search"></i></a>
											<a href="https://kotchaparnwongkor.me" className="primary"><i className="fa fa-link"></i></a>
										</div>
									</div>
								</div>
							</div>
							{/* <!--/ End portfolio -->					 */}
							{/* <!-- Single portfolio --> */}
							<div className="mix all MongDB SPA col-md-4 col-sm-6 col-xs-12 col-fix">
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
							<div className="mix all authentication col-md-4 col-sm-6 col-xs-12 col-fix">
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
							<div className="mix all react MongoDB SPA col-md-4 col-sm-6 col-xs-12 col-fix">
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
							<div className="mix  all SEO col-md-4 col-sm-6 col-xs-12 col-fix">
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
							<div className="mix all MySQL SPA col-md-4 col-sm-6 col-xs-12 col-fix">
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