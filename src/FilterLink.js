import React from 'react';
import store from './store';

export default class FilterLink extends React.Component {
	render() {
		return (
			<div>
				<a href='#' onClick={e => {
					e.preventDefault();
					store.dispatch({
						type:'SET_VISIBILITY_FILTER',
						filter: this.props.filter
					})
				}}>this.props.children</a>
			</div>
		)
	}
}