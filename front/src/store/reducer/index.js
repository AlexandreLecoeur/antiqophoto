import { combineReducers } from 'redux';

import photographerReducer from './photographer';
import userReducer from './user';

const rootReducer = combineReducers({
  photographer: photographerReducer,
  user: userReducer,
});

export default rootReducer;


