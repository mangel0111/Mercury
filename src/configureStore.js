import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import merchant from './reducers';


//This file don't need Eslint
/* eslint-disable */


const configureStore = (preloadedState) => {
	const enhancers = [];
	const middleware = [ thunk ];
	if (process.env.NODE_ENV !== 'production') {
		middleware.push(createLogger());
	}

	if (process.env.NODE_ENV === 'development') {
		const devToolsExtension = window.devToolsExtension;

		if (typeof devToolsExtension === 'function') {
			enhancers.push(devToolsExtension());
		}
	}

	return createStore(
		merchant,
		applyMiddleware(...middleware),
		preloadedState,
		compose(
			...enhancers
		)
	);
};

export default configureStore;
