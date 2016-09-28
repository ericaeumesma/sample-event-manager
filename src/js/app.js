import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import reducers from './reducers/index';
import Modal from './components/modal';

const store = createStore(
	reducers,
	{ events: JSON.parse(window.localStorage.getItem('events') || '{}') },
	window.devToolsExtension && window.devToolsExtension()
);

export default class App extends Component
{
	componentWillReceiveProps(nextProps)
	{
		if(nextProps.location.key !== this.props.location.key &&
			nextProps.location.state &&
			nextProps.location.state.modal)
		{
			this.previousChildren = this.props.children;
		}
	}

	render()
	{
		const { location } = this.props;
		const isModal = location.state && location.state.modal && this.previousChildren;

		return	<Provider store={store}>
					<div className="app">
						{ isModal ? this.previousChildren : this.props.children }
						{ isModal && <Modal returnTo={location.state.returnTo}>{this.props.children}</Modal> }
					</div>
				</Provider>;
	}
}