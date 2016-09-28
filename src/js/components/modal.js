import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Modal = ({ children, returnTo }) => (
	<div className="modal">
		<p><Link to={this.props.returnTo}>Back</Link></p>
		{this.props.children}
	</div>
);

Modal.propTypes =
{
	returnTo: PropTypes.string.isRequired
};

export default Modal;