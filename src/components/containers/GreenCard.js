import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'


class GreenCard extends Component {
    render() {
        return (
            <div className='green'>
                < ToDoCard />
                < ToDoCard />
            </div>
        );
    }
}

export default GreenCard;
