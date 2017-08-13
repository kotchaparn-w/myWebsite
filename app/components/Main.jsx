// Include React
import React, { Component }from "react";

//Import high level component
import Header from "./Header";
import Footer from "./Footer";
import Jumbotron from "./children/Jumbotron";
import AboutMe from "./children/AboutMe";
import Portfolio from "./children/Portfolio";

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            component: "main"
        }
        this.setComponent = this.setComponent.bind(this);
    }

    setComponent(comp) {
        this.setState({component: comp});
    }
    componentDidMount(){
		// $.getScript("js/easing.js");
		// $.getScript("js/particles-config.js");
		// $.getScript("js/animate-text.js");
		$.getScript("js/main.js");
	}

	componentDidUpdate(){
		// $.getScript("js/easing.js");
		// $.getScript("js/particles-config.js");
		// $.getScript("js/animate-text.js");
		$.getScript("js/main.js");
    }

    render(){
        return(
            <div id="main-div">
                 <Header component={this.state.component} setComponent={this.setComponent}/>
                    <Jumbotron component={this.state.component}/>
                    <AboutMe component={this.state.component}/>
                    <Portfolio component={this.state.component}/>
                 <Footer component={this.state.component}/>
            </div>
        )
    }  
}

export default Main;