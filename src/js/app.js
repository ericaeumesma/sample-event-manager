import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import MobileEventDetails from './containers/mobile-event-details';

const store = createStore(
	reducers,
	{ events: { items: JSON.parse(window.localStorage.getItem('events') || '{}') } },
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension && window.devToolsExtension()
	)
);

const App = ({children}) => (
	<Provider store={store}>
		<div className="app">
			<MobileEventDetails />
			{children}
		</div>
	</Provider>
);

export default App;