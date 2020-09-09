import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { PlusCircle } from 'react-bootstrap-icons';
import { ClipboardData } from 'react-bootstrap-icons';
import { DoorClosed } from 'react-bootstrap-icons';
import '../App.css';




class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>

                <Link to='/dash'>
                    <h1> TO DO APP FOR THE PEOPLE</h1>
                </Link>

                <Link to='/new'> 
                    < PlusCircle className='icon'/> 
                </Link>

                <Link to='/data'> 
                    < ClipboardData className='icon'/> 
                </Link>

                <Link to='/signin'> 
                    < DoorClosed className='icon'/> 
                </Link>

            </div>
        );
    }
}

export default NavBar;
