import React, { Component } from 'react';
import ToDos from './toDos.js'
import AddToDo from './addToDo.js'
import { connect } from 'react-redux'
import actions from './actions/action'

class App extends Component {

  tempToDo = (event) => {
    let typedValue = event.target.value;
    this.props.tempToDo(typedValue);
  }

  removeToDo = (event, id) => {
    event.preventDefault();
    let updatedList = this.props.todos.filter(todo => {
      return (todo.id !== id)
    })
    this.props.removeToDo(updatedList);
  }

  addToDo = (event) => {
    event.preventDefault();
    if (this.props.tempTodo !== '') {
      let itemToAdd = {
        content: this.props.tempTodo,
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }
      let stateToAdd = [...this.props.todos, itemToAdd];
      this.props.addToDo(stateToAdd);
    }
  }

  render() {
    return (
      <div className="container">
        <h1>My to-do list </h1>
        <ToDos todos={this.props.todos} removeToDo={this.removeToDo} />
        <AddToDo tempToDo={this.tempToDo} addToDo={this.addToDo} temp={this.props.tempTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    tempTodo: state.tempTodo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeToDo: (updatedList) => dispatch(actions.removeToDo(updatedList)),
    tempToDo: (typedValue) => dispatch(actions.tempToDo(typedValue)),
    addToDo: (stateToAdd) => dispatch(actions.addToDo(stateToAdd))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
