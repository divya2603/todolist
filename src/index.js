import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';
import './index.css';

const render = () => {ReactDOM.render(
  <App todos={store.getState()}/>,
  document.getElementById('root')
)};

store.subscribe(render);
render();
