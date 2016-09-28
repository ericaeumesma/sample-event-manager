import React, { PropTypes } from 'react';

const EventMarker = ({event, onClick}) => (
	<img onClick={onClick} className="event-marker" src="assets/img/event-marker.png" />
);

EventMarker.PropTypes =
{
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
	event: PropTypes.object.isRequired,
	$hover: PropTypes.bool.isRequired,
	onClick: PropTypes.func
};

export default EventMarker;