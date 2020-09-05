import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'

class YellowCard extends Component {

    renderYellow = () => {
        return this.props.yellowCards.map(card => {
            return <ToDoCard cardData={card}/>
        })
    }

    render() {
        return (
            <div className='yellow'>
              { this.renderYellow() }
            </div>
        );
    }
}

export default YellowCard;
