import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
                <h1> TO DO APP FOR THE PEOPLE</h1>
                <button onClick={() => this.props.handleLogOut()}> Log Out</button>
            </div>
        );
    }
}

export default NavBar;
