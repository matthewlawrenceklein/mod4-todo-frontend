import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/index'
import { completeTodo } from '../actions/index'
import { Pencil } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import '../App.css';




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

    handleComplete = (id) => {

        const reqObj = {
          method: 'PATCH', 
          headers: {'Content-Type' : 'application/json'}, 
          body: JSON.stringify({ completed : true })
        }
    
        fetch(`http://localhost:4000/todos/${id}`, reqObj)
          .then(resp => resp.json())
          .then(respData => {
            this.props.completeTodo(id)
        })    
    }

    render() {

        const startDate = Date.parse(this.props.cardData.start_date)
        const daysPassed = Math.floor((new Date() - startDate)/(24*60*60*1000))

        return (
                <div className='toDoCard'>
                    <h5>{this.props.title}</h5>
                    <h6>Age: {daysPassed} days</h6>
                    { this.props.cardData.body } 
                    <br></br>
                    {/* <button onClick={ () => this.props.handleEdit(this.props.cardData)}> Edit Card</button>
                    <button onClick={ () => this.handleComplete(this.props.cardData.id) }> Completed </button>
                    <button onClick={ () => this.destroyTodo(this.props.cardData.id) }> DELETE TEST</button> */}
                    <Link to='/edit' className='icon'>
                        <Pencil />
                    </Link>

                </div>
        );
    }
}

const mapDispatchToProps = {
    deleteTodo,
    completeTodo
  }

export default connect(null, mapDispatchToProps)(ToDoCard)
