let actions = {
    removeToDo: (updatedList) => {
        return {
            type: 'removeToDo',
            updatedList: updatedList
        }
    },
    tempToDo: (typedValue) => {
        return {
            type: 'tempToDo',
            typedValue: typedValue
        }
    },
    addToDo: (stateToAdd) => {
        return {
            type: 'addToDo',
            stateToAdd: stateToAdd
        }
    }
}

export default actions