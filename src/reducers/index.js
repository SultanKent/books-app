import { combineReducers } from 'redux';
import bookReducer from '../actions/bookReducer';

const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
