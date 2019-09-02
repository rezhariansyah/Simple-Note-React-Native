import { combineReducers } from 'redux';

// import all reducers
import note from './note';
import category from './category'

const appReducer = combineReducers({
  note,
  category
});

export default appReducer;