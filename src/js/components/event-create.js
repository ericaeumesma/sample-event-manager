import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const EventCreate = ({ onSave }) => (
	<div className="event-detail">
		<h1>Event Create</h1>
	</div>
);

EventCreate.propTypes =
{
	onSave: PropTypes.func.isRequired
};

export default EventCreate;