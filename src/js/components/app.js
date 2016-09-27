import React, { Component } from 'react';
import Modal from './modal';

export default class App extends Component
{
	componentWillReceiveProps(nextProps)
	{
		if ((
			nextProps.location.key !== this.props.location.key &&
			nextProps.location.state &&
			nextProps.location.state.modal
		)) {
			this.previousChildren = this.props.children;
		}
	}

	render()
	{
		let { location } = this.props;
		let isModal = location.state && location.state.modal && this.previousChildren;

		return	<div>
					{ isModal ? this.previousChildren : this.props.children }
					{ isModal && <Modal returnTo={location.state.returnTo}>{this.props.children}</Modal> }
				</div>;
	}
}