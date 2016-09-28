import _ from 'underscore';
import { connect } from 'react-redux';

import Index from '../components/index';
import { changeFilter, deleteEvent, selectEvent } from '../actions/index';

function getFilteredEvents(events, filter)
{
	const filterTags = (filter || '').replace(/ /g, '').split(',');

	if(filter)
	{
		return _.filter(events, ({tags}) => _.intersection(tags, filterTags).length > 0);
	}
	else
	{
		return _.toArray(events);
	}
}

function orderByDate(events)
{
	return _.sortBy(events, 'date');
}

function mapStateToProps(state)
{
	return {
		currentFilter: state.filter,
		selectedEventId: state.events.selectedEventId,
		events: orderByDate(getFilteredEvents(state.events.items, state.filter))
	}
}

function mapDispatchToProps(dispatch)
{
	return {
		onFilterChange: (filter) => dispatch(changeFilter(filter)),
		onSelect: (event) => dispatch(selectEvent(event.id)),
		onDelete: (event) => confirm('Do you really want to delete this event?') && dispatch(deleteEvent(event.id))
	}
}

const IndexContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);

export default IndexContainer;