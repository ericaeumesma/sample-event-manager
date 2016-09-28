import _ from 'underscore';
import { connect } from 'react-redux';

import Index from '../components/index';
import { changeFilter } from '../actions/index';

function getFilteredEvents(events, filter)
{
	if(filter)
		return _.filter(events, (event) => event.tags.indexOf(filter) > -1);
	else
		return _.toArray(events);
}

function mapStateToProps(state)
{
	return {
		currentLocation: state.currentLocation,
		events: getFilteredEvents(state.events, state.filter)
	}
}

function mapDispatchToProps(dispatch)
{
	return {
		onFilterChange: (filter) => dispatch(changeFilter(filter))
	}
}

const IndexContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Index);

export default IndexContainer;