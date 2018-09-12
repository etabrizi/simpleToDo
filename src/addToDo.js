import React from 'react'

const AddToDo = (props) => {

    return (
        <div>
            <form className="addToDo" onSubmit={(event) => { props.addToDo(event) }}>
                <fieldset>
                    <label htmlFor="todo">Add a todo:</label>
                    <input value={props.temp} id="todo" onChange={(event) => { props.tempToDo(event) }} type="text" />
                    <button className="btn">Add to do</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AddToDo;