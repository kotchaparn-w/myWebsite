import React, { Component } from 'react';

class ModalForm extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:['']
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
    }

    toggleModal(){
        this.props.toggleModal(false);
    }
    handleCatChange(event){
        const { value, tabIndex } = event.target;
        let newCatArr = [...this.state.categories];
        newCatArr[tabIndex] = value;
        this.setState({ categories:  newCatArr });
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
        console.log(this.state);
        return(
            <form className="form-inline">
                {this.state.categories.map((category, i) => 
                    <div className="form-group" key={i}>
                        <input
                        value={this.state.categories[i]}
                        tabIndex={i}
                        onChange={this.handleCatChange}
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