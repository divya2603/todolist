import React, { Component } from 'react';
import todoApp from './reducers/index';
import store from './store';
import FilterLink from './FilterLink';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let index = 0;
    return (
      <div className="App">
      <input type="text" ref={node=> {this.input=node;}} />
        <button onClick = {
          () => {
            store.dispatch({
              type : 'ADD_TODO',
              text : this.input.value,
              id : index++
            })
            this.input.value='';
          }
        }>
          Add Todo
        </button>
        <ol>
        if(this.props.todos) {
          this.props.todos.map(todo => 
            <li key={todo.id++} onClick={() => {
              store.dispatch({
                  type:'TOGGLE_TODO',
                  id: todo.id
                })
              }}
              style={{textDecoration:todo.completed ? 'line-through':'none'}}>
              {todo.text}</li>
            )}
        </ol>
        <p>
          Show:
          {''}
          <FilterLink filter='SHOW_ALL'>All</FilterLink>
          {''}
          <FilterLink filter='SHOW_ACTIVE' >Active</FilterLink>
          {''}
          <FilterLink filter='SHOW_COMPLETED' >Completed</FilterLink>
        </p>
      </div>
    );
  }
}

export default App; 
