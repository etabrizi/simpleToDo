const initState = {
    todos: [
        {
            content: 'Buy some milk',
            id: 1,
            active: true
        },
        {
            content: 'Go to the gym',
            id: 2,
            active: true
        }
    ],
    tempTodo: '',
    itemIsLoading: false,
    error: false,
    stars: []
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
                tempTodo: '',
                todos: action.stateToAdd
            }
        case 'disableToDo':
            return {
                ...state,
                todos: action.state
            }
        case 'itemIsLoading':
            return {
                ...state,
                itemIsLoading: action.isLoading
            }
        case 'itemsHasErrored':
            return {
                ...state,
                error: action.error
            }
        case 'itemsFetchDataSuccess':
            return {
                ...state,
                stars: action.stars.results
            }
        default:
            return state
    }
}

export default rootReducer