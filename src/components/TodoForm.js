import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitTodo } from '../actions/index'


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

    handleNew = () => {
  
        const reqObj = {
          method: 'POST', 
          headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : "*"
          },
          body: JSON.stringify(this.state)
        }
    
        fetch(`http://localhost:4000/todos`, reqObj)
          .then(resp => resp.json())
          .then(respData => {
            this.props.submitTodo(respData)
            this.setState({
                body : '',
                color: 'green'
            })
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

                <button onClick={ this.handleNew }> Create ToDo</button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    submitTodo
}


export default connect(null, mapDispatchToProps)(TodoForm)
