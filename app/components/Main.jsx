// Include React
import React, { Component } from "react";

//Import high level mainComponent
import Header from "./Header";
import Footer from "./Footer";
import Jumbotron from "./children/Jumbotron";
import AboutMe from "./children/AboutMe";
import Portfolio from "./children/Portfolio";
import Timeline from "./children/Timeline";
import Contact from "./children/Contact";
import ContactBG from "./children/ContactBG";

class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            mainComponent: "main"
        }
        this.setMainComponent = this.setMainComponent.bind(this);
    }

    setMainComponent(comp) {
        this.setState({mainComponent: comp});
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
                 <Header mainComponent={this.state.mainComponent} setMainComponent={this.setMainComponent}/>
                    <Portfolio mainComponent={this.state.mainComponent} /> 
                    <Jumbotron mainComponent={this.state.mainComponent} />
                    <AboutMe mainComponent={this.state.mainComponent} />
                    <Timeline mainComponent={this.state.mainComponent} />
                    <Contact mainComponent={this.state.mainComponent} />
                    <ContactBG mainComponent={this.state.mainComponent} />
                 <Footer mainComponent={this.state.mainComponent} />
            </div>
        )
    }  
}

export default Main;