import { combineReducers } from 'redux';
import ChannelListModalReducer from './channel_list_modal_reducer';
import DMModalReducer from './dm_modal_reducer';


export default combineReducers({
  channelListModal: ChannelListModalReducer,
  dmModal: DMModalReducer
});