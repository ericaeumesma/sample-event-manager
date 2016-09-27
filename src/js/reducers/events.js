function event(state = {}, action)
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
	switch(action.type)
	{
		case 'SAVE_EVENT':
			return {
				...state,
				[action.id]: event(state[action.id], action)
			};
		case 'DELETE_EVENT':
			const newState = { ...state };
			delete newState[action.id];

			return newState;
		default:
			return state
	}
}

export default events;