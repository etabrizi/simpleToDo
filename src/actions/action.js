let actions = {
    removeToDo: (updatedList) => {
        return {
            type: 'removeToDo',
            updatedList
        }
    },
    tempToDo: (typedValue) => {
        return {
            type: 'tempToDo',
            typedValue
        }
    },
    addToDo: (stateToAdd) => {
        return {
            type: 'addToDo',
            stateToAdd
        }
    },
    disableToDo: (state) => {
        return {
            type: 'disableToDo',
            state
        }
    }
}

export default actions