import React, { Component } from 'react';
import {connect} from 'react-redux';
import addArticle from '../actions/index'

function mapDispatchToProps(dispatch){
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class ConnectedForm extends Component {

    state = {
        title: ""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const {title} = this.state;
        this.props.addArticle({title});
        this.setState({title: ""});
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <button type="submit">SAVE</button>
            </form>
        )
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;