import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import MessagesReducer from './messages_reducer';
import ChannelsReducer from './channels_reducer';
import MembershipsReducer from './memberships_reducer';

export default combineReducers({
  users: UsersReducer,
  messages: MessagesReducer,
  channels: ChannelsReducer,
  memberships: MembershipsReducer
});