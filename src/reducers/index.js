import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import wastelandsReducer from './wastelands';
import searchWastelandsReducer from './searchWastelands';
import wastelandReducer from './wasteland';
import rehabTotalReducer from './rehabTotalReducer';
import mapReducer from './mapReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
  form: formReducer,
  wastelands: wastelandsReducer,
  searchWastelands: searchWastelandsReducer,
  wasteland: wastelandReducer,
  rehabWastelands: rehabTotalReducer,
  mapWastelands: mapReducer,
  user: userReducer,
});

export default allReducers;
