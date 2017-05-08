import { createStore } from 'redux';
import toDos from './reducers/todos';

const store = createStore(toDos);

export default store;