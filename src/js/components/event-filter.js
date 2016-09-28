import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function onFormSubmit(form, callback)
{
}

const EventFilter = ({ onChange }) => (
	<form className="event-filter" onSubmit={(event) => {
		event.preventDefault();
		onFormSubmit(event.target, onChange);
	}}>
		<input className="event-filter--input" placeholder="Search for a tag..." />
	</form>
);

EventFilter.propTypes =
{
	onChange: PropTypes.func.isRequired
};

export default EventFilter;