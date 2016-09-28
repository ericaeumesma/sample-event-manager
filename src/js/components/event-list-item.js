import _ from 'underscore';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const EventListItem = ({ event, onClick, onTagClick, onDelete }) => (
	<div className="event-list-item" onClick={(e) => e.target == e.currentTarget && onClick()}>
		<div className="event-list-item--left-pane">
			<span className="event-list-item--title">{event.title}</span>
			<span className="event-list-item--date">{moment(event.date).format('DD/MM/YYYY')}</span>
			<span className="event-list-item--address">{event.address}</span>
			{_.map(event.tags, (tag) => (
				<span key={tag}
					onClick={() => onTagClick(tag)}
					className="event-list-item--tag">{tag}</span>
			))}
		</div>
		<div className="event-list-item--right-pane">
			<Link to={`event/${event.id}/update`}
				className="event-list-item--button event-list-item--update-button">
				<span className="glyphicon glyphicon-pencil" />
			</Link>
			<span className="event-list-item--button event-list-item--delete-button"
				onClick={onDelete}>
				<span className="glyphicon glyphicon-remove" />
			</span>
		</div>
	</div>
);

EventListItem.propTypes =
{
	event: PropTypes.object.isRequired,
	onClick: PropTypes.func,
	onTagClick: PropTypes.func,
	onDelete: PropTypes.func
};

export default EventListItem;