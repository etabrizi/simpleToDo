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
    },
    itemsIsLoading: (bool) => {
        return {
            type: 'itemIsLoading',
            isLoading: bool
        }
    },
    itemsHasErrored: (bool) => {
        return {
            type: 'itemsHasErrored',
            error: bool
        }
    },
    itemsFetchDataSuccess: (items) => {
        return {
            type: 'itemsFetchDataSuccess',
            stars: items
        }
    },
    itemsFetchData: (url) => {
        return (dispatch) => {
            dispatch(actions.itemsIsLoading(true));
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    dispatch(actions.itemsIsLoading(false));
                    return response;
                })
                .then((response) => response.json())
                .then((items) => dispatch(actions.itemsFetchDataSuccess(items)))
                .catch(() => dispatch(actions.itemsHasErrored(true)));
        }
    }
}

export default actions