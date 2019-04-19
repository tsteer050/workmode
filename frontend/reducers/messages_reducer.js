import { 
  RECEIVE_MESSAGE, 
  RECEIVE_MESSAGES, 
  REMOVE_MESSAGE 
} from '../actions/message_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {

  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message })
    case RECEIVE_MESSAGES:
      return merge({}, state, action.messages);
    case REMOVE_MESSAGE:
      let current = merge({}, state);
      delete current[action.messageId];
      return current;
    default:
      return state;
  }
};