import React, { Component } from 'react';
import { Link } from 'react-router';

export default function Modal({ children, returnTo })
{
	return	<div className="modal">
				<p><Link to={this.props.returnTo}>Back</Link></p>
				{this.props.children}
			</div>;
}