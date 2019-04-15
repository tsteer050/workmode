import { 
  LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { merge } from 'lodash';

const _nullSession = { currentUser: null }

export default (state = _nullSession, action) => {

  Object.freeze(state);

  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullSession);
    default:
      return state;
  }

}

