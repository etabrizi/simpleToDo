const initState = {
    todos: [
        { content: 'Buy some milk', id: 1 },
        { content: 'Go to the gym', id: 2 }
    ],
    tempTodo: ''
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'removeToDo':
            return {
                ...state,
                todos: action.updatedList
            }
        case 'tempToDo':
            return {
                ...state,
                tempTodo: action.typedValue
            }
        case 'addToDo':
            return {
                ...state,
                todos: action.stateToAdd
            }
        default:
            return state
    }
}

export default rootReducer