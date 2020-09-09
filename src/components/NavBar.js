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
                    <img src='https://img.icons8.com/wired/128/000000/broken-robot.png' alt="nice robot"/> <br></br>
                </Link>
                    <h4>welcome to taskbot jr</h4>

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
