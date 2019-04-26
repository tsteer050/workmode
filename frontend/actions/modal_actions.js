export const TOGGLE_DM_MODAL = 'TOGGLE_DM_MODAL';
export const TOGGLE_CHANNEL_LIST_MODAL = 'RECEIVE_MESSAGES';
export const SET_MODALS = 'SET_MODALS';


export const toggleDMModal = () => {
  return ({
    type: TOGGLE_DM_MODAL,
  });

};

export const toggleChannelListModal = () => ({
  type: TOGGLE_CHANNEL_LIST_MODAL,
});

export const setModals = () => ({
  type: SET_MODALS,
});
