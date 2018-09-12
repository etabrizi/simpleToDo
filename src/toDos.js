import React from 'react'

const ToDos = ({ todos, removeToDo }) => {

    const todoList = todos.length ? (
        todos.map(todos => {
            return (<p key={todos.id}><span className="spaced-right">{todos.content}</span><button className="btn-small btn-floating" onClick={(event) => { removeToDo(event, todos.id) }}>x</button></p>)
        })
    ) : (
            <p>No Shit left mate, your fee to drink in the pub! </p>
        );


    return (
        <ul>
            <li>{todoList}</li>
        </ul>
    )
}

export default ToDos;