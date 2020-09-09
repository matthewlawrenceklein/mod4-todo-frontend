import React, { Component } from 'react';
import './App.css';
import ToDoForm from './components/TodoForm'
import EditForm from './components/EditForm'
import Data from './components/Data'
import ToDoContainer from './components/TodoContainer'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTodosSuccess } from './actions/index'

//wed goals
    //setup routes 

// thurs goals
    // setup google auth 

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

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/dash'>
            <ToDoContainer />
          </Route>

          <Route path='/new'>
            <ToDoForm />
          </Route>

          <Route path='/edit/:id' render={(props) => {
                return ( <EditForm {...props } /> )
          }} />

          <Route path='/data'>
            <Data />
          </Route>


        </Switch>
        
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





// { this.state.loggedIn ? 
//   <div>
//     < NavBar handleLogOut={this.handleLogOut}/>
//     < ToDoForm handleSubmit={this.handleSubmit} user={this.state.userId}/> 
//     < ToDoContainer 
//         handleComplete={this.handleComplete}
//         handleEdit={this.handleEdit}
//     />
//   </div>
//   :
//   < LoginForm handleLogin={this.handleLogin}/>
// }