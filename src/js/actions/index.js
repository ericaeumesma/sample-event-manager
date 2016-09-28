import API_KEY from '../gmaps-api-key';

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
	return function(dispatch)
	{
		dispatch({ type: 'SAVE_EVENT_SUCCESS' });
		window.location.hash = '#';
	}
}

export function saveEventError(event, error)
{
	return function(dispatch)
	{
		dispatch({ type: 'SAVE_EVENT_ERROR', event, error });
		alert('An error occured when trying to save your event.');
	}
}

export function saveEvent(event)
{
	return function(dispatch)
	{
		dispatch(saveEventStart());

		return fetch(`https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&address=${event.address}`)
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