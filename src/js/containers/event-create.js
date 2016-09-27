import { connect } from 'react-redux';

import EventCreate from '../components/event-create';
import { saveEvent } from '../actions/index';

function mapDispatchToProps(dispatch)
{
	return {
		onSave: (event) => dispatch(saveEvent(event))
	}
}

const EventCreateContainter = connect(
	null,
	mapDispatchToProps
)(EventCreate);

export default EventCreateContainter;