import _ from 'underscore';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import EventListItem from './event-list-item';

const EventList = ({ events, onClick, onTagClick, selectedEventId, onDelete }) => (
	<div className="event-list">
		{ events && _.map(events, (event) => (
			<EventListItem
				key={event.id}
				event={event}
				onClick={() => onClick(event)}
				onTagClick={onTagClick}
				onDelete={() => onDelete(event)} />
		)) }
		{ !events && <span>Empty</span> }
	</div>
);

EventList.propTypes =
{
	selectedEventId: PropTypes.number,
	events: PropTypes.array.isRequired,
	onClick: PropTypes.func,
	onDelete: PropTypes.func
};

export default EventList;