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