import React, { Component } from 'react';
import ToDos from './components/toDos'
import AddToDo from './components/addToDo'
import { connect } from 'react-redux'
import actions from './actions/action'

class App extends Component {

  componentDidMount() {
    this.props.fetchData('https://swapi.co/api/people');
  }

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

    const loaded = this.props.itemIsLoading ? (<div>Loading Data</div>) : (<div>{this.props.stars.length}</div>);

    return (

      <div className="container">

        <div className="hide">{loaded}</div>

        {<h1>My To-Do List</h1>}
        <ToDos todos={this.props.todos} removeToDo={this.removeToDo} disableToDo={this.disableToDo} />
        <AddToDo tempToDo={this.tempToDo} addToDo={this.addToDo} temp={this.props.tempTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    tempTodo: state.tempTodo,
    itemIsLoading: state.itemIsLoading,
    error: state.error,
    stars: state.stars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    disableToDo: (state) => dispatch(actions.disableToDo(state)),
    removeToDo: (updatedList) => dispatch(actions.removeToDo(updatedList)),
    tempToDo: (typedValue) => dispatch(actions.tempToDo(typedValue)),
    addToDo: (stateToAdd) => dispatch(actions.addToDo(stateToAdd)),
    fetchData: (url) => dispatch(actions.itemsFetchData(url))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
