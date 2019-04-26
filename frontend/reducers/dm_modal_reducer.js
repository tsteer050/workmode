import { SET_MODALS, TOGGLE_DM_MODAL } from '../actions/modal_actions.js';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_MODALS:
      return { active: false };
    case TOGGLE_DM_MODAL:
      let isActive = !state.active;
      return { active: isActive };
    default:
      return state;
  }
};