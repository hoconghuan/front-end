import React, { Component } from 'react'
import Container from './container';
import store from './redux/store';

export default class App extends Component {
	render() {
		return (
			<div>
				<Container store={store}></Container>
			</div>
		)
	}
}
