import { connect } from 'react-redux';

import EventUpdate from '../components/event-update';
import { saveEvent, deleteEvent } from '../actions/index';

function mapStateToProps(state, ownProps)
{
	return {
		event: state.events[ownProps.params.id]
	}
}

function mapDispatchToProps(dispatch)
{
	return {
		onSave: (event, id) => dispatch(saveEvent(event)),
		onDelete: (id) => dispatch(deleteEvent(id))
	}
}

const EventUpdateContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventUpdate);

export default EventUpdateContainter;