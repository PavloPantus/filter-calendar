import { createStore, combineReducers } from 'redux';

import { SetWinnerReducer } from './SetWinnerReducer';

const rootReducer = combineReducers({
  winner: SetWinnerReducer,
});

const store = createStore(rootReducer);

export default store;
