export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
import * as MessageApiUtil from '../util/message_api_util';


export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  messageId: message.id
});

export const createMessage = (message) => dispatch => (
  MessageApiUtil.createMessage(message).then(message => dispatch(receiveMessage(message)))
);

export const deleteMessage = (id) => dispatch => (
  MessageApiUtil.deleteMessage(id).then(message => dispatch(removeMessage(message)))
);
