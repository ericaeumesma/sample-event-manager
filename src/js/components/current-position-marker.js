import React, { PropTypes } from 'react';

const CurrentPositionMarker = () => (
	<img className="current-position-marker" src="assets/img/current-position.png" />
);

CurrentPositionMarker.PropTypes =
{
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
	$hover: PropTypes.bool.isRequired
};

export default CurrentPositionMarker;