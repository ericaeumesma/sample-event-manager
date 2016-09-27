import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const EventDetails = ({ event, onDelete }) => (
	<div className="event-detail">
		<h1>Event Details</h1>
		<pre>{JSON.stringify(event)}</pre>
	</div>
);

EventDetails.propTypes =
{
	event: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default EventDetails;