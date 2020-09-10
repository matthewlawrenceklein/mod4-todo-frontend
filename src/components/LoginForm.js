import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { setUser } from '../actions/index'
import { fetchTodosSuccess } from '../actions/index'
import { Redirect } from 'react-router-dom'


class LoginForm extends Component {
    
    state={
        redirect : false 
    }

    render() {
        const failed = (response) => {
            alert('login failed, please try again.')
         }
        const responseGoogle = (response) => {

            const newEmail = response.profileObj.email
            fetch(`http://localhost:4000/users`)
                .then(resp => resp.json())
                .then(allUsers => {
                    const userCheck = allUsers.filter(user => user.email === newEmail)
                    if (userCheck.length === 0){
                        
                        const userObj = {
                            email : newEmail
                        }
                        const reqObj = {
                            method: 'POST', 
                            headers: { 'Content-Type' : 'application/json' }, 
                            body: JSON.stringify(userObj)
                        }

                        fetch(`http://localhost:4000/users`, reqObj)
                            .then(resp => resp.json())
                            .then(newUser => {
                                this.props.setUser(newUser.id)
                                this.props.fetchTodosSuccess(newUser.todos) 

                                this.setState({
                                    redirect : true 
                                })
                              })
                              
                    } else {
                        this.props.setUser(userCheck[0].id)
                        this.props.fetchTodosSuccess(userCheck[0].todos)
                        this.setState({
                            redirect : true 
                        })

                    }
                })
        }

        if (this.state.redirect) {
            return <Redirect to="/dash" />
        }

        return (
            <div className="login login-button">
                <h4> taskbot jr</h4>
                <img id='robot-header' src='https://img.icons8.com/wired/128/000000/broken-robot.png' alt="nice robot"/> <br></br>
                <GoogleLogin
                    clientId="150446143719-udl86di4a0sudv5bot9pgfrrvd9urp8l.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={failed}
                    cookiePolicy={'single_host_origin'}
                    // isSignedIn={true}
                />
            </div>
        );
    }
}

const mapDispatchToProps = {
    setUser,
    fetchTodosSuccess
  }

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        userId: state.userId 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
