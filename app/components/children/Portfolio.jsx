// Include React
import React, { Component } from "react";
import axios from 'axios';
import Isotope from 'isotope-layout';
import ReactDOM from "react-dom";
import Projects from "./Projects";


// Create Portfolio class
class Portfolio extends Component {
	constructor(props){
		super(props)
		this.state = {
			projects: [],
			categories:[],
			activeFilter: "all"
		}
		this.handleCatClick = this.handleCatClick.bind(this);
		this.renderCategories = this.renderCategories.bind(this);
		this.setCategoryState = this.setCategoryState.bind(this);
		this.iso = null;
	}

	componentDidMount(){
		axios.get('/project')
        .then(result => {
            const { projects } = result.data;
            if(projects) {
				this.setCategoryState(projects);
            } 
        })
		.catch(err => console.log(err))
	}

	setCategoryState(projects){
		let newCat = [
			{
				type: "all",
				// fa: "fas fa-chart-line",
				fa: "fa fa-tasks",
				total: 0
			}
		];
	
			for (let prop of projects){
				if (prop.categories){
					newCat[0].total++;
					for(let category of prop.categories) {
						let found = false;
						let total = 1;
						for(let existingCat of newCat) {
							if(existingCat.type == category.type){
								found = true;
								existingCat.total++;
							}
						}
						if(!found) {
							newCat = [...newCat, {...category, total } ]
						}	
					}
				}
			}
		
		this.setState({ projects, categories: newCat }, ()=> {
			this.iso = new Isotope(ReactDOM.findDOMNode(this.refs.isotopeContainer))
			this.iso.arrange({filter:"*"});
		});

	}
	
	handleCatClick(event){
		const { value } = event.target.dataset;
		if(value === "all"){
			this.iso.arrange({filter:"*"});
		} else {
			this.iso.arrange({ filter: `.${value}` });
		}
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
		const { projects } = this.state;
		// console.log(projects)
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
								{this.state.categories.map(this.renderCategories)}
							</ul>
						</div>
					</div>
				</div>

				<div className="portfolio-inner">
					<div className="row stylex">	
						<div className="isotop-active" ref="isotopeContainer">
						{ this.state.projects.length > 0 && <Projects projects={projects} /> }
						</div>
					</div>
				</div>
			</div>
		</section>
		)
    }
}

export default Portfolio