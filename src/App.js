import React, { Component } from 'react';
import './App.css';
import ToDoForm from './components/TodoForm'
import ToDoContainer from './components/TodoContainer'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'


class App extends Component {

  state={
    loggedIn : true,
    userId : 1, 
    allCards : [],
    greenCards : [],
    yellowCards : [],
    redCards : []
  }

  getCards = () => {
    fetch(`http://localhost:4000/users/${this.state.userId}`)
      .then(resp => resp.json())
      .then(userData => {
        this.setState({
          allCards : userData.todos, 
          greenCards :  userData.todos.filter(todo => todo.color === 'green'),
          yellowCards :  userData.todos.filter(todo => todo.color === 'yellow'),
          redCards :  userData.todos.filter(todo => todo.color === 'red'),
        })  
      
      
      })
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

  handleSubmit = (newTodo) => {
    
    const reqObj = {
      method: 'POST', 
      headers: {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(newTodo)
    }

    fetch(`http://localhost:4000/todos`, reqObj)
      .then(resp => resp.json())
      .then(respData => {
        this.getCards()
        })
   }

  render() {
    return (
      <div>
        { this.state.loggedIn ? 
          <div>
            < NavBar handleLogOut={this.handleLogOut}/>
            < ToDoForm handleSubmit={this.handleSubmit} user={this.state.userId}/> 
            < ToDoContainer 
                allCards={this.state.allCards}
                greenCards={this.state.greenCards}
                yellowCards={this.state.yellowCards}
                redCards={this.state.redCards}
            />
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
