import _ from 'underscore';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const EventListItem = ({ event }) => (
	<div className="event-list-item">
		<div className="event-list-item--left-pane">
			<span className="event-list-item--title">{event.title}</span>
			<span className="event-list-item--date">{event.date}</span>
			<span className="event-list-item--address">{event.address}</span>
		</div>
		<div className="event-list-item--right-pane">
			<span className="event-list-item--button event-list-item--update-button" />
			<span className="event-list-item--button event-list-item--delete-button" />
		</div>
	</div>
);

EventListItem.propTypes =
{
	event: PropTypes.object.isRequired
};

export default EventListItem;