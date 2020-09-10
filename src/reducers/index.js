import { combineReducers } from 'redux'
import todos from './todos'
import userId from './userId'


export default combineReducers({
   todos, 
   userId
  })