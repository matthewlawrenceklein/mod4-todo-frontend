import React, { Component } from 'react';
import Draggable from 'react-draggable';

class ToDoCard extends Component {

    state={
        body : 'make the bed'
    }

    render() {
        return (
            <Draggable>
                <div className='toDoCard'>
                    <h3>DO THIS</h3>
                    {this.state.body}
                    <button> Completed </button>
                </div>
            </Draggable>
        );
    }
}

export default ToDoCard;
