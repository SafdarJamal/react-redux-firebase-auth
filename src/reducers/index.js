import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  loading: loadingReducer,
  auth: authReducer
});

export default reducers;
