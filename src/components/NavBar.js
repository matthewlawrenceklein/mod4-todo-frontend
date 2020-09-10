import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PlusCircle } from 'react-bootstrap-icons';
import { ClipboardData } from 'react-bootstrap-icons';
import { DoorClosed } from 'react-bootstrap-icons';
import { setUser } from '../actions/index'
import { GoogleLogout } from 'react-google-login';
import '../App.css';

//needs access to loggedIn state 


class NavBar extends Component {

    handleClick = () => {
        console.log('hey ho')
        this.props.setUser(0)
     }
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

                <Link to='/'> 
                    < DoorClosed onClick={this.handleClick} className='icon-trash'/> 
                </Link>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      userId: state.userId 
    }
}

const mapDispatchToProps = {
    setUser,
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
