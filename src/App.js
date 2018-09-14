import React, { Component } from 'react';
import ToDos from './components/toDos'
import AddToDo from './components/addToDo'
import { connect } from 'react-redux'
import actions from './actions/action'

class App extends Component {

  tempToDo = (event) => {
    let typedValue = event.target.value;
    this.props.tempToDo(typedValue);
  }

  disableToDo = (event, id) => {
    event.preventDefault();
    let state = [...this.props.todos];
    let updateState = state.find(todo => todo.id === id);
    updateState.active ? updateState.active = false : updateState.active = true;
    this.props.disableToDo(state);
  }

  removeToDo = (event, id) => {
    event.preventDefault();
    let updatedList = this.props.todos.filter(todo => todo.id !== id);
    this.props.removeToDo(updatedList);
  }

  addToDo = (event) => {
    event.preventDefault();
    if (this.props.tempTodo !== '') {
      let itemToAdd = {
        content: this.props.tempTodo,
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        active: true
      }
      let stateToAdd = [...this.props.todos, itemToAdd];
      this.props.addToDo(stateToAdd);
    }
  }



  render() {
    return (
      <div className="container">
        <h1>My to-do list </h1>
        <ToDos todos={this.props.todos} removeToDo={this.removeToDo} disableToDo={this.disableToDo} />
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
    disableToDo: (state) => dispatch(actions.disableToDo(state)),
    removeToDo: (updatedList) => dispatch(actions.removeToDo(updatedList)),
    tempToDo: (typedValue) => dispatch(actions.tempToDo(typedValue)),
    addToDo: (stateToAdd) => dispatch(actions.addToDo(stateToAdd))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
