import React from 'react'

const ToDos = ({ todos, removeToDo, disableToDo }) => {

    console.log(todos);

    const todoList = todos.length ? (
        todos.map(todos => {
            return (<p key={todos.id}><span className={todos.active ? 'active spaced-right' : 'disabled spaced-right'}>{todos.content}</span>
                <button className="btn-small btn-floating spaced-right-sm" onClick={(event) => { disableToDo(event, todos.id) }}><i class="material-icons">check</i></button>
                <button className="btn-small btn-floating" onClick={(event) => { removeToDo(event, todos.id) }}>x</button></p>
            )
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