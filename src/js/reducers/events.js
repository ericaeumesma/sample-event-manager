function persistEvents(state)
{
	window.localStorage.setItem('events', JSON.stringify(state)); 
}

function event(state = { tags: [] }, action)
{
	switch(action.type)
	{
		case 'SAVE_EVENT_WITH_COORDS':
			return { ...state, ...action.event, id: action.id, coords: action.coords };
		default:
			return state;
	}
}

function events(state = {}, action)
{
	let nextState;

	switch(action.type)
	{
		case 'SAVE_EVENT_WITH_COORDS':

			nextState = {
				...state,
				[action.id]: event(state[action.id], action)
			};

			persistEvents(nextState);

			return nextState;
		case 'DELETE_EVENT':

			nextState = { ...state };
			delete nextState[action.id];

			persistEvents(nextState);

			return nextState;
		default:
			return state
	}
}

function reducer(state = { isSaving: false, error: null, items: {}, selectedEventId: null }, action)
{
	switch(action.type)
	{
		case 'SELECT_EVENT':
			return { ...state, selectedEventId: action.id };
		case 'SAVE_EVENT_START':
			return { ...state, isSaving: true, error: null };
		case 'SAVE_EVENT_WITH_COORDS':
			return { ...state, items: events(state.items, action) };
		case 'SAVE_EVENT_SUCCESS':
			return { ...state, isSaving: false };
		case 'SAVE_EVENT_ERROR': 
			return { ...state, error: action.error };
		case 'DELETE_EVENT':
			return {
				...state,
				selectedEventId: action.id == state.selectedEventId ? null : state.selectedEventId,
				items: events(state.items, action)
			};
		default:
			return state;
	}
}

export default reducer;