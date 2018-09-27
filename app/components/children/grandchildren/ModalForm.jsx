import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import '../../config/firebaseConfig.js';

const storageRef = firebase.storage().ref();

class ModalForm extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[''],
            image: {
                name: null,
                link: null
            }
        }
        this.fileInput = React.createRef();
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deletePicPath = this.deletePicPath.bind(this);
    }

    toggleModal(){
        this.props.toggleModal(false);
    }
    handleChange(event){
        const { value, name, tabIndex, files } = event.target;
        if(name === "category"){
            let newCatArr = [...this.state.categories];
            newCatArr[tabIndex] = value;
            this.setState({ categories:  newCatArr });
        } else if(name === "imageInput"){
            if(this.state.image.name !== null){
                this.deletePicPath()
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
            this.setState({ image: {name: null, link: null }});
            this.fileInput.current.value = null;
        }).catch(err=> {
            console.log("An error occur during delete", err)
        });
    }
    addNewCat(event){
        event.preventDefault();
        let newCatArr = [...this.state.categories];
        newCatArr.push('');
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
            <form className="form-inline">
                {this.state.categories.map((category, i) => 
                    <div className="form-group" key={i}>
                        <input
                        value={this.state.categories[i]}
                        tabIndex={i}
                        name="category"
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
            </form>
        )
    }

    render(){
        console.table(this.state);
        return(
            <React.Fragment>
            <div className="modal fade in" id="modalForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button 
                        type="button" 
                        className="close" 
                        onClick={this.toggleModal}
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="exampleModalLabel">New message</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="control-label">Recipient:</label>
                            <input type="text" className="form-control" id="recipient-name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message-text" className="control-label">Message:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                        <label>categories</label>
                        {this.renderCategories()}
                        <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
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
                                className={this.state.image.name !== null? "btn btn-danger" : "btn btn-danger hide"}
                                >x</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button 
                        type="button" 
                        className="btn btn-danger" 
                        data-dismiss="modal"
                        onClick={this.toggleModal}
                        >
                        Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop in"></div>
            </React.Fragment>
        );
    }
}

export default ModalForm;