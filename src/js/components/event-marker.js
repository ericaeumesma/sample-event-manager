import React, { PropTypes } from 'react';

const EventMarker = () => (
	<img className="current-position-marker" src="assets/img/current-position.png" />
);

EventMarker.PropTypes =
{
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
	event: PropTypes.object.isRequired,
	$hover: PropTypes.bool.isRequired
};

export default EventMarker;