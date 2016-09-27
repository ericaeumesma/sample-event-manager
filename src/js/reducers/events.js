function persistEvents(state)
{
	window.localStorage.setItem('events', JSON.stringify(state)); 
}

function event(state = { title: null, address: null, tags: [] }, action)
{
	switch(action.type)
	{
		case 'SAVE_EVENT':
			return { ...state, ...action.event, id: action.id };
		default:
			return state;
	}
}

function events(state = {}, action)
{
	let newState;

	switch(action.type)
	{
		case 'SAVE_EVENT':
			newState = {
				...state,
				[action.id]: event(state[action.id], action)
			};

			persistEvents(newState);

			return newState;
		case 'DELETE_EVENT':
			newState = { ...state };
			delete newState[action.id];

			persistEvents(newState);

			return newState;
		default:
			return state
	}
}

export default events;