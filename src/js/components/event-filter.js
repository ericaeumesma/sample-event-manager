import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const EventFilter = ({ onChange }) => (
	<div className="event-filter">Event Filter</div>
);

EventFilter.propTypes =
{
	onChange: PropTypes.func.isRequired
};

export default EventFilter;