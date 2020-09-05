import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'


class GreenCard extends Component {

    renderGreen = () => {
        return this.props.greenCards.map(card => {
            return <ToDoCard cardData={card}/>
        })
    }



    render() {
        return (
            <div className='green'>
                { this.renderGreen() }
            </div>
        );
    }
}

export default GreenCard;
