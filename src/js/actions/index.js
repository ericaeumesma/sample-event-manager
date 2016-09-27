let nextEventId = window.localStorage.getItem('nextEventId') || 1;

export function saveEvent(event)
{
	let id = event.id;
	
	if(!id)
	{
		id = nextEventId++;
		window.localStorage.setItem('nextEventId', nextEventId);
	}

	return { type: 'SAVE_EVENT', id, event };
}

export function deleteEvent(id)
{
	return { type: 'DELETE_EVENT', id };
}

export function changeFilter(filter)
{
	return { type: 'CHANGE_FILTER', filter };
}