import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PlusCircle } from 'react-bootstrap-icons';
import { ClipboardData } from 'react-bootstrap-icons';
import { DoorClosed } from 'react-bootstrap-icons';
import { QuestionCircle } from 'react-bootstrap-icons';
import { setUser } from '../actions/index'
import { GoogleLogout } from 'react-google-login';
import '../App.css';
import Modal from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';


class NavBar extends Component {

    state = {
        show : false 
    }

    handleClick = () => {
        console.log('hey ho')
        this.props.setUser(0)
     }

    handleClose = () => {
        this.setState({
            show : false 
        })
    } 

    handleOpen = () => {
        this.setState({
            show : true 
        })    
        console.log(this.state)
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

                <Link to='/about'>
                    < QuestionCircle className='icon' />
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
