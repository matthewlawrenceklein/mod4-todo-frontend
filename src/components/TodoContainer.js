import React, { Component } from 'react';
import GreenCard from './containers/GreenCard'
import YellowCard from './containers/YellowCard'
import RedCard from './containers/RedCard'

class TodoContainer extends Component {

 
    render() {
        return (
            <div>
                < GreenCard greenCards={this.props.greenCards}/>
                < YellowCard yellowCards={this.props.yellowCards}/>
                < RedCard redCards={this.props.redCards}/>
            </div>
        );
    }
}

export default TodoContainer;
