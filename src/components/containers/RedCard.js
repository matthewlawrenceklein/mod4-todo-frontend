import React, { Component } from 'react';
import '../../App.css';
import ToDoCard from '../ToDoCard'


class RedCard extends Component {
    render() {
        return (
            <div className="red">
                < ToDoCard />
                < ToDoCard />
            </div>
        );
    }
}

export default RedCard;
