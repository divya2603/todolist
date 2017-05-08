import { combineReducers } from 'redux';
import toDo from './todo';
import toDos from './todos';
import visibilityFilter from './visibilityFilter';



const todoApp = combineReducers({
	toDo ,
	toDos,
	visibilityFilter
});

export default todoApp;