export const fetchTodosSuccess = (todos) => {
    return {
      type: 'FETCH_TODOS_SUCCESS',
      todos: todos
  }    
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}

export const completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    id: id
  }
}

export const submitTodo = (todo) => {
  return {
    type: 'SUBMIT_TODO',
    todo: todo
  }
}

export const editTodo = (todo) => {
  return {
    type: 'EDIT_TODO',
    todo: todo
  }
}

export const setUser = (id) => {
    return {
      type: 'SET_USER',
      userId : id 
    }
}