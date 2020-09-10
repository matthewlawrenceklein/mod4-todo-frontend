import React, { Component } from 'react';
import { connect } from 'react-redux'
import { submitTodo } from '../actions/index'
import { Redirect } from 'react-router-dom'
import { ArrowRightCircle } from 'react-bootstrap-icons';

class TodoForm extends Component {
    state={
        body: '',
        color: 'green',
        completed: false, 
        start_date: new Date(),
        redirect: false,
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
        const todoObj = {
            body: this.state.body,
            color: this.state.color,
            completed: false, 
            user_id: this.props.userId,
            start_date: new Date(),
            redirect: false,
        }
  
        const reqObj = {
          method: 'POST', 
          headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : "*"
          },
          body: JSON.stringify(todoObj)
        }
    
        fetch(`http://localhost:4000/todos`, reqObj)
          .then(resp => resp.json())
          .then(respData => {
            this.props.submitTodo(respData)
            this.setState({
                body : '',
                color: 'green',
                redirect: true,  
            })
            })
       }

    render() {

        if (this.state.redirect) {
            return <Redirect to="/dash" />
        }

        return (
            <div className="toDoForm">
                <h1>Add ToDo</h1>
                <input className='form-item' type='textarea'rows="4" cols="50" placeholder="add ToDo" onChange={this.handleBody}></input>

                <select onChange={this.handleColor} className='form-item' >
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                </select>
                <ArrowRightCircle onClick={ this.handleNew } className='icon' />
            </div>
        );
    }
}

const mapDispatchToProps = {
    submitTodo
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        userId: state.userId 
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
