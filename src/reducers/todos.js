const initialState = []


export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return [...action.todos]

    case 'DELETE_TODO':  
          const updatedTodos = state.filter(t => t.id !== action.id)
          return updatedTodos
    case 'COMPLETE_TODO':
          const newTodos = state.filter(t => t.id !== action.id)
          return newTodos
    case 'SUBMIT_TODO':
          const todos = [...state, action.todo]
          return todos 
  
    default:
      return state
  }
}