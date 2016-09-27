import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import EventFilter from './event-filter';
import EventList from './event-list';
import EventMap from './event-map';

const Index = ({ onFilterChange, events }) =>
(
	<div className="index">
		<div className="index--left-pane">
			<EventFilter onChange={onFilterChange} />
			<EventList events={events} />
		</div>
		<div className="index--right-pane">
			<EventMap events={events} />
		</div>
	</div>
);

Index.propTypes =
{
	onFilterChange: PropTypes.func.isRequired,
	events: PropTypes.array.isRequired
}

export default Index;