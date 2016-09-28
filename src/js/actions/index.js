let nextEventId = window.localStorage.getItem('nextEventId') || 1;

export function saveEventStart(event)
{
	return { type: 'SAVE_EVENT_START' };
}

export function saveEventWithCoords(event, coords)
{
	let id = event.id;

	if(!id)
	{
		id = nextEventId++;
		window.localStorage.setItem('nextEventId', nextEventId);
	}

	return { type: 'SAVE_EVENT_WITH_COORDS', id, event, coords };
}

export function saveEventSuccess()
{
	return { type: 'SAVE_EVENT_SUCCESS' };
}

export function saveEventError(event, error)
{
	return { type: 'SAVE_EVENT_ERROR', event, error };
}

export function saveEvent(event)
{
	return function(dispatch)
	{
		dispatch(saveEventStart());

		return fetch(`http://maps.google.com/maps/api/geocode/json?address=${event.address}`)
		.then((result) => result.json())
		.then((json) => json.results[0].geometry.location)
		.then((coords) => dispatch(saveEventWithCoords(event, coords)))
		.then(() => dispatch(saveEventSuccess()))
		.catch((reason) => dispatch(saveEventError(reason)));
	}
}

export function deleteEvent(id)
{
	return { type: 'DELETE_EVENT', id };
}

export function selectEvent(id)
{
	return { type: 'SELECT_EVENT', id };
}

export function changeFilter(filter)
{
	return { type: 'CHANGE_FILTER', filter };
}