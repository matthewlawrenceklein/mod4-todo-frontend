import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'


class RedCard extends Component {

    renderRed = () => {
        return this.props.redCards.map(card => {
            return <ToDoCard cardData={card}/>
        })
    }


    render() {
        return (
            <div className="red">
              { this.renderRed() }
            </div>
        );
    }
}

export default RedCard;
