import { combineReducers } from 'redux';
import events from './events';
import filter from './filter';

const reducers = combineReducers({
  events,
  filter
});

export default reducers;