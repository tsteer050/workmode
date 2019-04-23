import { SELECT_CHANNEL } from '../actions/channel_actions.js';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return action.selected;
    default:
      return state;
  }
};