import { combineReducers } from 'redux';
import SelectedChannelReducer from './selected_channel_reducer';
import ModalsReducer from './modals_reducer';


export default combineReducers({
  selected: SelectedChannelReducer,
  modals: ModalsReducer
});