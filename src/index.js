import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';
import './index.css';

const render = () => {
	console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmm')
	console.log(store.getState().todos)
  ReactDOM.render(
  <App todos={store.getState().todos}/>,
  document.getElementById('root')
)};

store.subscribe(render);
render();
