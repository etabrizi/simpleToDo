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
    }
}

export default actions