import React, { Component } from 'react';
import './App.css';
import ToDoForm from './components/TodoForm'
import EditForm from './components/EditForm'
import Data from './components/Data'
import ToDoContainer from './components/TodoContainer'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import About from './components/About'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTodosSuccess } from './actions/index'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/dash'>
            <NavBar />
            <ToDoContainer />
          </Route>

          <Route path='/new'>
            <NavBar />
            <ToDoForm />
          </Route>

          <Route path='/edit/:id' render={(props) => {
                return ( 
                <EditForm {...props } /> )
          }} />

          <Route path='/data'>
            <NavBar />
            <Data />
          </Route>

          <Route exact path='/'>
              <LoginForm/>
          </Route>

          <Route>
            <NavBar />
            <About />
          </Route>


        </Switch>

        <Footer/>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    userId: state.userId 
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