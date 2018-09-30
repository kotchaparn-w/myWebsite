import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment';
import ModalForm from './grandchildren/ModalForm';

import firebase from 'firebase/app';
import 'firebase/auth';
import '../config/firebaseConfig.js';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
           contacts: [],
           projects: [],
           mode: 'contact lists',
           isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.swicthMode = this.swicthMode.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        firebase.auth().signOut().then(function() {
            console.log("Signed Out");
          }).catch(function(error) {
            console.log(err);
        });
    }
    swicthMode(event){
        event.preventDefault();
        const { value } = event.target;
        this.setState({ mode : value });
    }

    componentDidMount(){
        axios.get('/dashboard')
        .then(result => {
            const { contacts, projects } = result.data;
            if(result.data.contacts) {
                this.setState({ contacts, projects });
            } 
        })
        .catch(err => console.log(err))
    }
    renderContacts(){
        const { contacts } = this.state;
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Message</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 && contacts.map((contact, i) => { 
                        let { _id, name, email, phone, message, date } =  contact;
                        return (
                            <tr key={_id}>
                                <th scope="row">{i+1}</th>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{message}</td>
                                <td>{date !== undefined ? moment(date).format('LLL') : ""}</td>
                            </tr>
                        );                   
                    })}
                </tbody>
            </table>
        )
    }
    renderProjets(){
        const { projects } = this.state;
        console.log(projects);
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Highlight</th>
                    <th scope="col">Description</th>
                    <th scope="col">Link</th>
                    <th scope="col">Categories</th>
                    <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.length > 0 && projects.map((project, i) => { 
                        let { _id, name, highlight, description, link, categories, image } =  project;
                        console.log(image.link)
                        return (
                            <tr key={_id}>
                                <th scope="row">{i+1}
                                    <button className="btn btn-defaul btn-xs" id="delete_project">x
                                    </button>
                                </th>
                                <td>{name}</td>
                                <td>{highlight}</td>
                                <td>{description}</td>
                                <td>{link}</td>
                                <td>{categories.map(category => `${category.category} ` )}</td>
                                <td>{image.link}</td>
                            </tr>
                        );                   
                    })}
                </tbody>
            </table>
        )
    }
    
    toggleModal(bool){
        this.setState({ isModalOpen: bool})
    }

    render() {

        const { mode } = this.state;
        return(
            <section id="log-in"className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-4 col-sm-2 col-xs-offset-4 col-sm-offset-6 col-md-offset-6">
                                <button 
                                value={mode === 'contact lists'? 'project lists' : 'contact lists'}
                                className="btn btn-lg btn-primary"
                                onClick={this.swicthMode}
                                type="submit">
                                {mode === 'contact lists'? 'project lists' : 'contact lists'}
                                </button>
                            </div>
                            {mode === 'project lists' && <div className="col-xs-4 col-sm-2">
                                <button 
                                className="btn btn-lg btn-success"
                                onClick={() => this.toggleModal(true)}
                                type="submit">
                                Upload Projects
                                </button>
                            </div>}
                            <div className="col-xs-4 col-sm-2">
                                <button 
                                className="btn btn-lg btn-danger"
                                onClick={this.handleClick}
                                type="submit">
                                Sign out
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.isModalOpen == true && <ModalForm toggleModal={this.toggleModal}/>}
                            {mode === 'contact lists' ? this.renderContacts() : this.renderProjets()}
                        </div>
                    </div>
                </section>
        )
    }

}

export default Dashboard;