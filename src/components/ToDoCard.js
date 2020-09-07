import React, { Component } from 'react';
import Draggable from 'react-draggable';

class ToDoCard extends Component {

    // eventLogger = (e: MouseEvent, data: Object) => {
    //     // console.log('Event: ', e);
    //     console.log('Data: ', data.y);
    //   };

    checkMovement = (data: Object) => {
        this.props.handleCardMove(this.props.cardData, data.y)

     }  

    render() {
        return (
            <Draggable onStop={ this.checkMovement  }>
                <div className='toDoCard'>
                    <h3>{this.props.title}</h3>
                    { this.props.cardData.body } 

                    <button> Completed </button>
                </div>
            </Draggable>
        );
    }
}

export default ToDoCard;
