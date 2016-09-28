import _ from 'underscore';
import React from 'react';
import moment from 'moment';

const EventDetails = ({event}) => (
	<div className="event-details">
		{ event.imageURL && <div className="event-details--image" style={{backgroundImage: `url(${event.imageURL})`}} /> }
		<span className="event-details--title">{event.title}</span>
		<span className="event-details--date">{moment(event.date).format('DD/MM/YYYY')}</span>
		<span className="event-details--address">{event.address}</span>
		{_.map(event.tags, (tag) => <span key={tag} className="event-details--tag">{tag}</span>)}
	</div>
);

export default EventDetails;