import React, { PropTypes } from 'react';
import EventDetails from './event-details';

const EventMarker = ({event, onClick, showDetails}) => (
	<div className="event-marker">
		<img onClick={onClick} src="assets/img/event-marker.png" />
		{ showDetails && <EventDetails event={event} /> }
	</div>
);

EventMarker.PropTypes =
{
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
	event: PropTypes.object.isRequired,
	$hover: PropTypes.bool.isRequired,
	onClick: PropTypes.func,
	showDetails: PropTypes.bool
};

export default EventMarker;