import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const EventUpdate = ({ event, onSave, onDelete }) => (
	<div className="event-detail">
		<h1>Event Update</h1>
		<pre>{JSON.stringify(event)}</pre>
	</div>
);

EventUpdate.propTypes =
{
	event: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default EventUpdate;