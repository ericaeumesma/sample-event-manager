import React from 'react';
import { connect } from 'react-redux';

import MobileEventDetails from '../components/mobile-event-details';
import { selectEvent, deleteEvent } from '../actions/index';

function mapStateToProps(state)
{
	return {
		event: state.events.items[state.events.selectedEventId]
	}
}

function mapDispatchToProps(dispatch)
{
	return {
		onClose: (id) => dispatch(selectEvent(null)),
		onDelete: (id) => confirm('Do you really want to delete this event?') && dispatch(deleteEvent(id))
	}
}

const EventDetailsContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(MobileEventDetails);

export default EventDetailsContainter;