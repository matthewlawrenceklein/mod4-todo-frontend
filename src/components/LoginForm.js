import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div className="login">
                <h1> login </h1>
                <button onClick={() => this.props.handleLogin()}> Login</button>
            </div>
        );
    }
}

export default LoginForm;
