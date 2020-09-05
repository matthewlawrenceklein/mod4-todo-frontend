import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <div className="toDoForm">
                <h1>Add ToDo</h1>
                <input type='textarea'rows="4" cols="50" placeholder="add ToDo"></input>

                <select>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                </select>

                <button> Create ToDo</button>
            </div>
        );
    }
}

export default TodoForm;
