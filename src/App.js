import React, { Component } from 'react';
import Header from './components/Header';
import Merchants from './containers/Merchants';


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Merchants />
			</div>
		);
	}
}

export default App;
