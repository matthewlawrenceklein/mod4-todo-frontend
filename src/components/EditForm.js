import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editTodo } from '../actions/index'
import { deleteTodo } from '../actions/index'
import { Redirect } from 'react-router-dom'
import { Trash } from 'react-bootstrap-icons';
import { ArrowRightCircle } from 'react-bootstrap-icons';




class EditForm extends Component {

    state={
        body: '',
        color: 'green',
        completed: false, 
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

    handleEdit = () => {
  
        const todoObj = {
            body: this.state.body, 
            color: this.state.color
        }

        const reqObj = {
          method: 'PATCH', 
          headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : "*"
          },
          body: JSON.stringify(todoObj)
        }
        console.log(parseInt(this.props.match.params.id))
    
        fetch(`http://localhost:4000/todos/${parseInt(this.props.match.params.id)}`, reqObj)
          .then(resp => resp.json())
          .then(respData => {
              console.log(respData)
            this.props.editTodo(respData)
            this.setState({
                redirect: true,  
            })
            })
       }
       
       destroyTodo = () => {

        const id = parseInt(this.props.match.params.id)

        const reqObj = {
          method: 'DELETE'
        }
  
        fetch(`http://localhost:4000/todos/${id}`, reqObj)
          .then(resp => resp.json())
          .then(respData => {
           this.props.deleteTodo(id)
           this.setState({
            redirect: true,  
            })
        })
      }
    
    render() {
        // const thisTodo = this.props.todos.filter(todo => todo.id === parseInt(this.props.match.params.id))[0]
        // console.log(thisTodo)

        if (this.state.redirect) {
            return <Redirect to="/dash" />
        }

        return (
            <div className="toDoForm">
                <h1>Edit ToDo</h1>
                <input type='textarea'rows="4" cols="50" value={this.state.body} onChange={this.handleBody} className='form-item'></input>

                <select onChange={this.handleColor} className='form-item'>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                </select>

                {/* <button onClick={ this.handleEdit } className='form-item'> Edit ToDo</button>  */}
                <ArrowRightCircle className='icon' onClick={ this.handleEdit }/>
                <Trash className='icon' onClick={ this.destroyTodo }/>
            </div>
        );
    }
}

const mapDispatchToProps = {
    editTodo,
    deleteTodo
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(EditForm)