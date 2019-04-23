import { 
  RECEIVE_MEMBERSHIP, 
  REMOVE_MEMBERSHIP 
} from '../actions/membership_actions';
import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_MEMBERSHIP:
      return merge({}, state, { [action.membership.id]: action.membership });
    case RECEIVE_CHANNELS:
      return action.payload.memberships;
    case RECEIVE_CHANNEL:
      return merge({}, state, action.payload.memberhips);
    case REMOVE_MEMBERSHIP:
      let current = merge({}, state);
      delete current[action.membershipId];
      return current;
    default:
      return state;
  }
}