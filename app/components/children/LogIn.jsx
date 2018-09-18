import React, { Component } from "react";

import firebase from 'firebase/app';
import 'firebase/auth';
import '../config/firebaseConfig.js';

class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { value, name } = e.target 
        this.setState({ [name] :  value});
    }

    handleSubmit(event){
        event.preventDefault();
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(err => {
            console.log (err);
        })
    }

    render() {
        const { email, password } = this.state;
        return(
            <section id="log-in"className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 col-sm-4 col-xs-offset-3 col-sm-offset-4 col-md-offset-4">
                                <form className="form-signin">
                                    <h3 className="form-signin-heading">Please sign in</h3>
                                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                                        <input
                                        value={email}
                                        type="email"
                                        name="email"
                                        id="inputEmail" 
                                        className="form-control" 
                                        placeholder="Email address" 
                                        required="required" 
                                        onChange={this.handleChange}
                                        autoFocus />
                                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                                        <input
                                        value={password}
                                        type="password"
                                        name="password"
                                        id="inputPassword" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        onChange={this.handleChange}
                                        required="required" />
                                    <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                    </div>
                                    <button 
                                    onClick={this.handleSubmit.bind(this)}
                                    className="btn btn-lg btn-primary btn-block" 
                                    type="submit">
                                    Sign in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }

}

export default LogIn