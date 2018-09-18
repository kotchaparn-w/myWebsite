import React, { Component } from "react";
import LogIn from './LogIn';
import Dashboard from './Dashboard';
import firebase from 'firebase/app';
import 'firebase/auth'
import '../config/firebaseConfig.js';

class Portal extends Component {

    constructor(props){
        super(props)
        this.state ={
            authenticated: false
        }
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ authenticated : true });
            } else {
                this.setState({ authenticated : false });
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <section id="portal" className="section">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-title">
                                    <h1><span>portal</span><i className="fa fa-lock"></i></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 {this.state.authenticated == false && <LogIn /> || <Dashboard />}
            </React.Fragment>
        )
    }
}

export default Portal;