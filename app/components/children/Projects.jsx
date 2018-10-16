import React, { Component } from "react";

class Projects extends Component {
    constructor(props){
        super(props)

    }

    render(){
		return(
            <React.Fragment>
                { this.props.projects.map(project => {
                    const { _id, name, highlight, description, link, image, categories } = project;
                    const catLists = categories.map(category => ` ${category.type}`)
                    return (
                        <div 
                        key={_id}
                        className={ `${catLists.toString().replace(/,/g, ' ')} col-md-4 col-sm-6 col-xs-12 col-fix`} >
                            <div className="portfolio-single">
                                <div className="portfolio-head">
                                    <img src={image.link} />
                                </div>
                                <div className="portfolio-hover">
                                    <h4><span>{highlight}</span><a href="#">{name}</a></h4>
                                    <p>{description}</p>
                                    <div className="button">
                                        <a data-fancybox="gallery" href={image.link}><i className="fa fa-search"></i></a>
                                        <a href={link} className="primary"><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
			</React.Fragment>
		)
    }
}

export default Projects;