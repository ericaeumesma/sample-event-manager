import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

function filterFutureEvents(events)
{
	// todo filter future events;
	return events;
}

function onSelect(id)
{
	// todo on event selected on map
}

const EventMap = ({ events, onSelect }) => (
	<div className="event-map">
		<h1>Event Map</h1>
	</div>
);

EventMap.propTypes =
{
	events: PropTypes.array.isRequired
};

export default EventMap;