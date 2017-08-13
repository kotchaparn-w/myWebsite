// Include React
import React, { Component } from "react";

// Create ContactBG className
class ContactBG extends Component {
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.mainComponent == "contact"){
            return(
                <div id="clients" className="section" data-stellar-background-ratio="0.3">
                </div>
            )
        }else{
            return(<div/>)
        }
    }

}
export default ContactBG;