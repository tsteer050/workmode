import { merge } from 'lodash';
import { RECEIVE_CHANNEL, RECEIVE_CHANNELS }from '../actions/channel_actions.js';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, state, { [action.channel.id]: action.channel });
    case RECEIVE_CHANNELS:
      return merge({}, state, action.payload.channels);
    default: 
      return state;
  }
};