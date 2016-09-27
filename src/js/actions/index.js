let nextEventId = 1;

export const saveEvent = (event) => {
	return {
		type: 'SAVE_EVENT',
		id: event.id ? event.id : nextEventId++,
		event
	}
};

export const deleteEvent = (id) => {
	return {
		type: 'DELETE_EVENT',
		id
	}
};

export const changeFilter = (filter) => {
	return {
		type: 'CHANGE_FILTER',
		filter
	}
};