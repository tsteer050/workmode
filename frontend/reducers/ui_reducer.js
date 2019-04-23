import { combineReducers } from 'redux';
import SelectedChannelReducer from './selected_channel_reducer';


export default combineReducers({
  selected: SelectedChannelReducer
});