import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/index'



class ToDoCard extends Component {

    destroyTodo = (id) => {

      const reqObj = {
        method: 'DELETE'
      }

      fetch(`http://localhost:4000/todos/${id}`, reqObj)
        .then(resp => resp.json())
        .then(respData => {
         this.props.deleteTodo(id)
      })
    }


    render() {
        return (
                <div className='toDoCard'>
                    <h3>{this.props.title}</h3>
                    { this.props.cardData.body } 
                    <br></br>
                    <button onClick={ () => this.props.handleEdit(this.props.cardData)}> Edit Card</button>
                    <button onClick={ () => this.props.handleComplete(this.props.cardData) }> Completed </button>
                    <button onClick={ () => this.destroyTodo(this.props.cardData.id) }> DELETE TEST</button>
                </div>
        );
    }
}

const mapDispatchToProps = {
    deleteTodo
  }

export default connect(null, mapDispatchToProps)(ToDoCard)
