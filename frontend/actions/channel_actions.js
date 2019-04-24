export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
import * as ChannelApiUtil from '../util/channel_api_util';

export const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload
});

const receiveChannels = (payload) => ({
  type: RECEIVE_CHANNELS,
  payload
});

export const fetchChannel = (id) => dispatch => (
  ChannelApiUtil.fetchChannel(id).then((payload) => dispatch(receiveChannel(payload)))
);

export const fetchChannels = () => dispatch => (
  ChannelApiUtil.fetchChannels().then((payload) => dispatch(receiveChannels(payload)))
);

export const createDirectMessage = (channel, secondUserId) => dispatch => (
  ChannelApiUtil.createDirectMessage(channel, secondUserId)
    .then((channel) => dispatch(receiveChannel(channel)))
);

export const selectChannel = (id) => ({
  type: SELECT_CHANNEL,
  selected: id
});