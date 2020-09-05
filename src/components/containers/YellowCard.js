import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'



class YellowCard extends Component {
    render() {
        return (
            <div className='yellow'>
                < ToDoCard />
                < ToDoCard />
            </div>
        );
    }
}

export default YellowCard;
