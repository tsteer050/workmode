export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
import ChannelApiUtil from '../util/message_api_util';


const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  messageId: message.id
});

export const fetchMessage = (id) => dispatch => (
  ChannelApiUtil.fetchMessage(id).then(message => dispatch(receiveMessage(message)))
);

export const fetchMessages = () => dispatch => (
  ChannelApiUtil.fetchMessages().then(messages => dispatch(receiveMessages(messages)))
);

export const createMessage = (message) => dispatch => (
  ChannelApiUtil.createMessage(message).then(message => dispatch(receiveMessage(message)))
);

export const deleteMessage = (id) => dispatch => (
  ChannelApiUtil.deleteMessage(id).then(message => dispatch(removeMessage(message)))
);