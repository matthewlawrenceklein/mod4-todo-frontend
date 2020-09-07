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

   handleCardMove = (cardData, yPosition) => {
     console.log(cardData)
     console.log(yPosition)

      if ( cardData.color === 'green') {
            if (yPosition > 400 && yPosition < 750){
              const reqObj = {
                method: 'PATCH', 
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({color : 'yellow'})
              }

              fetch(`http://localhost:4000/todos/${cardData.id}`, reqObj)
                .then(resp => resp.json())
                .then(respData => {
                  this.getCards()
                })
            } else if (yPosition > 750 && yPosition < 1000){
              const reqObj = {
                method: 'PATCH', 
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({color : 'red'})
              }

              fetch(`http://localhost:4000/todos/${cardData.id}`, reqObj)
              .then(resp => resp.json())
              .then(respData => {
                this.getCards()
              })
            } else {
              this.getCards()
            }
      } else if (cardData.color === 'yellow'){
        if (yPosition < 400 && yPosition > 100 ){
          const reqObj = {
            method: 'PATCH', 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({color : 'green'})
          }

          fetch(`http://localhost:4000/todos/${cardData.id}`, reqObj)
            .then(resp => resp.json())
            .then(respData => {
              this.getCards()
            })
        } else if (yPosition > 350 && yPosition < 700){
          const reqObj = {
            method: 'PATCH', 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({color : 'red'})
          }

          fetch(`http://localhost:4000/todos/${cardData.id}`, reqObj)
          .then(resp => resp.json())
          .then(respData => {
            this.getCards()
          })
        } else {
          this.getCards()
        }


      } else if (cardData.color === 'red'){
        if (yPosition > 450 && yPosition < 670 ){
          const reqObj = {
            method: 'PATCH', 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({color : 'yellow'})
          }

          fetch(`http://localhost:4000/todos/${cardData.id}`, reqObj)
            .then(resp => resp.json())
            .then(respData => {
              this.getCards()
            })
        } else if (yPosition > 670 && yPosition < 970){
          const reqObj = {
            method: 'PATCH', 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({color : 'red'})
          }

          fetch(`http://localhost:4000/todos/${cardData.id}`, reqObj)
          .then(resp => resp.json())
          .then(respData => {
            this.getCards()
          })
        } else {
          this.getCards()
        }
      }

    }

  render() {
    return (
      <div>
        { this.state.loggedIn ? 
          <div>
            < NavBar handleLogOut={this.handleLogOut}/>
            < ToDoForm handleSubmit={this.handleSubmit} user={this.state.userId}/> 
            < ToDoContainer 
                handleCardMove={this.handleCardMove}
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
