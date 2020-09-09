import React, { Component } from 'react';
import './App.css';
import ToDoForm from './components/TodoForm'
import ToDoContainer from './components/TodoContainer'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTodosSuccess } from './actions/index'

//wed goals
    //setup routes 
    //setup edit/delete functionality 
    //setup analytics page with canvas.js 

// thurs goals
    // setup google auth 
    // move other top level functions to store?

class App extends Component {

  state={
    loggedIn : true,
    userId : 1, // will be current logged in user ID, not hardcored  
  }

  getCards = () => {
    fetch(`http://localhost:4000/users/${this.state.userId}`)
      .then(resp => resp.json())
      .then(user => {
        this.props.fetchTodosSuccess(user.todos)  
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

  handleComplete = (cardData) => {

    const reqObj = {
      method: 'PATCH', 
      headers: {'Content-Type' : 'application/json'}, 
      body: JSON.stringify({ completed : true })
    }

    fetch(`http://localhost:4000/todos/${cardData.id}`, reqObj)
      .then(resp => resp.json())
      .then(respData => {
        this.getCards()
        })    
  }
  
  handleEdit = (cardData) => {
    console.log(cardData)

  }


  render() {
    return (
      <div>
        { this.state.loggedIn ? 
          <div>
            < NavBar handleLogOut={this.handleLogOut}/>
            < ToDoForm handleSubmit={this.handleSubmit} user={this.state.userId}/> 
            < ToDoContainer 
                handleComplete={this.handleComplete}
                handleEdit={this.handleEdit}
            />
          </div>
          :
          < LoginForm handleLogin={this.handleLogin}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = {
  fetchTodosSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



{/* <Switch>
<Route path='/dash' component={TodoContainer}/>
<Route path='/new' component={TodoForm}/>
<Route path='/edit' component={TodoForm}/>
</Switch> */}