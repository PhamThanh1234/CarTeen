import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import countUser from './counterUser';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: countUser,
});

export default rootReducer;
