import React, { Component } from 'react';
import './App.css';
import ToDoForm from './components/TodoForm'
import ToDoContainer from './components/TodoContainer'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'


class App extends Component {

  state={
    loggedIn : true,
    allCards : [],
    greenCards : [],
    yellowCards : [],
    redCards : []
  }

  getCards = () => {
    fetch(`http://localhost:4000/users/1`)
      .then(resp => resp.json())
      .then(userData => {
        console.log(userData.todos)})
   }

   componentDidMount(){
     this.getCards()
   }



  handleLogOut = () => {
    this.setState({
      loggedIn : false 
    })
  }

  handleLogin = () => {
    this.setState({
      loggedIn : true 
    })
  }

  render() {
    return (
      <div>
        { this.state.loggedIn ? 
          <div>
            < NavBar handleLogOut={this.handleLogOut}/>
            < ToDoForm/> 
            < ToDoContainer />
          </div>
          :
          < LoginForm handleLogin={this.handleLogin}/>
        }
      </div>
    );
  }
}

export default App;


// App has top level ternary that renders login or homepage 
// logged-in view --- app children of 3x TODO Container (red, yellow, green) AND new TODO form 
