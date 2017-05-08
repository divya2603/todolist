import toDo from './todo';

const toDos = (state=[], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				toDo(undefined, action)
				];
		case 'TOGGLE_TODO': 
			return state.map(t => toDo(t,action))
		default:
			return state;
	}
}

export default toDos;