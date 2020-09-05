import React, { Component } from 'react';
import GreenCard from './containers/GreenCard'
import YellowCard from './containers/YellowCard'
import RedCard from './containers/RedCard'

class TodoContainer extends Component {
    render() {
        return (
            <div>
                < GreenCard/>
                < YellowCard/>
                < RedCard/>
            </div>
        );
    }
}

export default TodoContainer;
