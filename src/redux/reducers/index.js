import { combineReducers } from 'redux';

import { ThemeReducer } from './ThemeReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  theme: ThemeReducer,
  users: usersReducer,
});
