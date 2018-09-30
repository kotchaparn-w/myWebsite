import React, { Component } from 'react';
import axios from 'axios'
import firebase from 'firebase/app';
import 'firebase/storage';
import '../../config/firebaseConfig.js';

const storageRef = firebase.storage().ref();

class ModalForm extends Component {
    constructor(props){
        super(props)
        this.state= {
            name: '',
            highlight: '',
            description: '',
            link:'',
            categories: [
                {
                    category: '',
                    fa: ''
                }
            ],
            image: {
                name: '',
                link: ''
            }
        }
        this.fileInput = React.createRef();
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deletePicPath = this.deletePicPath.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    toggleModal(){
        this.props.toggleModal(false);
    }

    submitForm(){
        let valid = true;
        async function validateForm(obj) {  
            for (let prop in obj){
                if (typeof obj[prop] === 'object'){
                    validateForm(obj[prop]);
                }else if (typeof obj[prop] === 'string'){
                    if(obj[prop] === ""){
                        valid = false;
                        return;
                    }
                }
            }
        }
        validateForm(this.state).then(()=> {
            
            if (valid){
                const { name, highlight, description, link, categories, image } = this.state
                axios.post('/project', {
                    name,
                    highlight,
                    description,
                    link,
                    categories,
                    image
                })
                .then( res => {
                    console.log(res);
                })
                .catch( err => console.log(err));
            }
        })

        
    }
    handleChange(event){
        const { value, name, tabIndex, files } = event.target;
        if(name === "category"){
            let newCatArr = [...this.state.categories];
            newCatArr[tabIndex].category = value;
            this.setState({ categories:  newCatArr });
        } else if (name === "font-awesome"){
            let newCatArr = [...this.state.categories];
            newCatArr[tabIndex].fa = value;
            this.setState({ categories:  newCatArr });
        } else if(name === "imageInput"){
            if(this.state.image.name !== ''){
                return alert("Delete the uploaded file first");
            }
            const file = files[0];
            let uploadTask = storageRef.child('images/' + file.name).put(file);
            uploadTask.on('state_changed', snapshot => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, err => {
                console.log('An error occurs', err)
            }, ()=> {
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=> {
                    console.log('File available at', downloadURL);
                    this.setState({ image: {name: file.name, link: downloadURL }});
                });
            });
        } else {
            this.setState({ [name] : value });
        }
        
    }
    deletePicPath(event){
        event.preventDefault();
        let desertRef = storageRef.child('images/' + this.state.image.name);
        // Delete the file
        desertRef.delete().then(()=> {
            this.setState({ image: {name: '', link: '' }});
            this.fileInput.current.value = null;
        }).catch(err=> {
            console.log("An error occur during delete", err)
        });
    }
    addNewCat(event){
        event.preventDefault();
        let newCatArr = [...this.state.categories];
        newCatArr.push({category: '', FA: ''});
        this.setState({ categories:  newCatArr });
    }
    removeCat(event){
        event.preventDefault();
        let newCatArr = [...this.state.categories];
        newCatArr.splice(event.target.tabIndex, 1);
        this.setState({ categories:  newCatArr });
    }
    renderCategories(){
        return(
            <div className="form-inline">
                {this.state.categories.map((category, i) => 
                    <div className="form-group" key={i}>
                        <input
                        placeholder="category"
                        value={this.state.categories[i].category}
                        tabIndex={i}
                        name="category"
                        onChange={this.handleChange}
                        className="form-control" 
                        />
                        <input
                        placeholder="font awesome"
                        value={this.state.categories[i].FA}
                        tabIndex={i}
                        name="font-awesome"
                        onChange={this.handleChange}
                        className="form-control" 
                        />
                        <button 
                        type="submit" 
                        tabIndex={i}
                        onClick={this.removeCat.bind(this)}
                        id="removeCat"
                        className="btn btn-danger"
                        >x</button>
                    </div> 
                )}
                <button 
                type="submit" 
                id="addCat" 
                onClick={this.addNewCat.bind(this)}
                className="btn btn-success"
                >+</button>
            </div>
        )
    }
    
    render(){
        return(
            <React.Fragment>
            <div className="modal fade in" id="modalForm" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button 
                        type="button" 
                        className="close" 
                        onClick={this.toggleModal}
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="exampleModalLabel">New Project</h4>
                    </div>
                    <form>
                    <div className="modal-body">
                        
                            <div className="form-group">
                                <label className="control-label">Project name</label>
                                <input 
                                    required="required"
                                    type="text" 
                                    className="form-control"
                                    name="name"
                                    onChange={this.handleChange}
                                    id="project-name" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Project highlight</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="highlight"
                                    onChange={this.handleChange}
                                    id="project-highlight" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" className="control-label">Project description</label>
                                <textarea 
                                    className="form-control"
                                    name="description"
                                    onChange={this.handleChange}
                                    id="project-description">
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Project link</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="link"
                                    onChange={this.handleChange} 
                                    id="project-link" />
                            </div>
                            <label>categories</label>
                            {this.renderCategories()}
                            <div className="form-inline">
                                <div className="form-group">
                                    <label htmlFor="exampleInputFile">Image</label>
                                    <input 
                                        type="file"
                                        name="imageInput"
                                        ref={this.fileInput}
                                        onChange={this.handleChange}/>
                                        
                                </div>
                                <button 
                                    type="submit" 
                                    id="removePicPath"
                                    onClick={this.deletePicPath}
                                    className={this.state.image.name !== ''? "btn btn-danger" : "btn btn-danger hide"}
                                    >x
                                </button>
                            </div>    
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            data-dismiss="modal"
                            onClick={this.toggleModal}>
                            Close
                        </button>
                        <button 
                            type="button" 
                            onClick={this.submitForm}
                            className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop in"></div>
            </React.Fragment>
        );
    }
}

export default ModalForm;