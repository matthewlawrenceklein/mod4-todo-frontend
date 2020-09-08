import React, { Component } from 'react';

class TodoForm extends Component {

    state={
        body: '',
        color: 'green',
        completed: false, 
        user_id: this.props.user
    }

    handleBody = (event) => {
        this.setState({
            body: event.target.value 
        })
     }

    handleColor = (event) => {
        this.setState({
            color : event.target.value
        })
    }

    submitAndClear = () => {
    this.props.handleSubmit(this.state)
    
    this.setState({
        body : '',
        color: 'green'
    })
        
    }

    render() {
        return (
            <div className="toDoForm">
                <h1>Add ToDo</h1>
                <input type='textarea'rows="4" cols="50" placeholder="add ToDo" onChange={this.handleBody}></input>

                <select onChange={this.handleColor}>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                </select>

                <button onClick={ this.submitAndClear }> Create ToDo</button>
            </div>
        );
    }
}

export default TodoForm;
