import React, { Component } from 'react';
import todoApp from './reducers/index';
import store from './store';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let index = 0;
    console.log('m,nsdc,mdn, ');
    console.log(this.props.todos)
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
            <li key={todo.id}>{todo.text}</li>
          )
        }
        </ol>
      </div>
    );
  }
}

export default App;
