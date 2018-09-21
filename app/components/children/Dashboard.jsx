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
           isModalOpen: true
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        firebase.auth().signOut().then(function() {
            console.log("Signed Out");
          }).catch(function(error) {
            console.log(err);
        });
    }

    componentDidMount(){
        axios.get('/dashboard')
        .then(contacts => {
            if(contacts.data) {
                this.setState({ contacts : contacts.data });
            } 
        })
        .catch(err => console.log(err))
    }
    renderContacts() {
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
    
    toggleModal(bool){
        this.setState({ isModalOpen: bool})
    }

    render() {
        return(
            <section id="log-in"className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-4 col-sm-2 col-xs-offset-6 col-sm-offset-8 col-md-offset-8">
                                <button 
                                className="btn btn-lg btn-success"
                                onClick={() => this.toggleModal(true)}
                                type="submit">
                                Upload Projects
                                </button>
                            </div>
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
                            {this.state.isModalOpen == false ? this.renderContacts() : <ModalForm toggleModal={this.toggleModal}/>}
                        </div>
                    </div>
                </section>
        )
    }

}

export default Dashboard;