import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import EventFilter from './event-filter';
import EventList from './event-list';
import EventMap from './event-map';

const Index = ({ events, currentLocation, onFilterChange }) =>
(
	<div className="index">
		<div className="index--left-pane">
			<EventFilter onChange={onFilterChange} />
			<EventList events={events} />
		</div>
		<div className="index--right-pane">
			<EventMap events={events} currentLocation={currentLocation} />
		</div>
	</div>
);

Index.propTypes =
{
	events: PropTypes.array.isRequired,
	currentLocation: PropTypes.object,
	onFilterChange: PropTypes.func.isRequired
}

export default Index;