import _ from 'underscore';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import EventListItem from './event-list-item';

const EventList = ({ events }) => (
	<div className="event-list">
		{ events && _.map(events, (event) => <EventListItem event={event} key={event.id} />) }
		{ !events && <span>Empty</span> }
	</div>
);

EventList.propTypes =
{
	events: PropTypes.array.isRequired
};

export default EventList;