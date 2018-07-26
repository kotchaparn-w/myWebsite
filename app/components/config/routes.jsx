// Include the React library
import React from "react";

// Include the react-router-dom modules
import { Route, Router, Switch } from "react-router-dom";

// Reference the high-level components
import Main from "../Main";
import Jumbotron from "../children/Jumbotron";
import AboutMe from "../children/AboutMe";
import Portfolio from "../children/Portfolio";
import Timeline from "../children/Timeline";
import Contact from "../children/Contact";
import ContactBG from "../children/ContactBG";
import history from "../../history.js";

const routes = (
    <Router history={history}> 
        {/*Passing location to main component  */}
        <Main location={location}>
                <Route exact path="/" component={Jumbotron}/> 
                <Route exact path="/" component={AboutMe} />
                <Route path="/portfolio" component={Portfolio}/> 
                <Route exact path="/timeline" component={Timeline} />
                <Route exact path="/contact" component={Contact}/> 
                <Route exact path="/contact" component={ContactBG} />
        </Main>
    </Router>
)
// export Router
export default routes;