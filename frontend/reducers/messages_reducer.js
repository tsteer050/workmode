import { 
  RECEIVE_MESSAGE, 
  REMOVE_MESSAGE 
} from '../actions/message_actions';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message });
    case RECEIVE_CHANNELS:
      return merge({}, state, action.payload.messages);
    case RECEIVE_CHANNEL:
      return merge({}, state, action.payload.messages);
    case REMOVE_MESSAGE:
      let current = merge({}, state);
      delete current[action.messageId];
      return current;
    default:
      return state;
  }
};