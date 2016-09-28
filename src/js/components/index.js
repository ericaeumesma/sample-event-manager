import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import EventFilter from './event-filter';
import EventList from './event-list';
import EventMap from './event-map';

const Index = ({ events, selectedEventId, currentLocation, currentFilter, onFilterChange, onSelect, onDelete }) =>
(
	<div className="index">
		<div className="index--left-pane">
			<Link className="index--create-event-button" to="/event/create">Create a new event</Link>
			<input className="event-filter--input"
				placeholder="Search for a tag..."
				onChange={(e) => onFilterChange(e.target.value)}
				value={currentFilter || ''} />
			<div className="index--event-list-wrapper">
				<EventList
					events={events}
					selectedEventId={selectedEventId}
					onClick={onSelect}
					onTagClick={onFilterChange}
					onDelete={onDelete} />
			</div>
		</div>
		<div className="index--right-pane">
			<EventMap events={events} selectedEventId={selectedEventId} onClick={onSelect} />
		</div>
	</div>
);

Index.propTypes =
{
	currentFilter: PropTypes.string,
	selectedEventId: PropTypes.number,
	events: PropTypes.array.isRequired,
	onFilterChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func,
	onSelect: PropTypes.func
}

export default Index;