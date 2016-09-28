import React from 'react';
import { Link } from 'react-router';

import EventDetails from './event-details';

const MobileEventDetails = ({ event, onClose, onDelete }) => {
	if(!event) return null;

	return	<div className="mobile-event-details">
				<div className="mobile-event-details--toolbar">
					<span className="mobile-event-details--button mobile-event-details--back-button"
						onClick={onClose}>
						<span className="glyphicon glyphicon-chevron-left" />
					</span>
					<span className="mobile-event-details--button mobile-event-details--delete-button"
						onClick={() => onDelete(event.id)}>
						<span className="glyphicon glyphicon-remove" />
					</span>
					<Link to={`event/${event.id}/update`}
						className="mobile-event-details--button mobile-event-details--update-button"
						onClick={onClose}>
						<span className="glyphicon glyphicon-pencil" />
					</Link>
				</div>
				<EventDetails event={event} />
			</div>;
};

export default MobileEventDetails;