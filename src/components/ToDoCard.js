import React, { Component } from 'react';
import Draggable from 'react-draggable';

class ToDoCard extends Component {

    // eventLogger = (e: MouseEvent, data: Object) => {
    //     // console.log('Event: ', e);
    //     console.log('Data: ', data.y);
    //   };



    render() {
        return (
                <div className='toDoCard'>
                    <h3>{this.props.title}</h3>
                    { this.props.cardData.body } 

                    <button onClick={ () => this.props.handleComplete(this.props.cardData) }> Completed </button>
                </div>
        );
    }
}

export default ToDoCard;
