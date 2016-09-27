import { connect } from 'react-redux';

import EventDetails from '../components/event-details';
import { deleteEvent } from '../actions/index';

function mapStateToProps(state, ownProps)
{
	return {
		event: state.events[ownProps.params.id]
	}
}

function mapDispatchToProps(dispatch)
{
	return {
		onDelete: (id) => dispatch(deleteEvent(id))
	}
}

const EventDetailsContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventDetails);

export default EventDetailsContainter;