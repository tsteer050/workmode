export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
import * as ChannelApiUtil from '../util/channel_api_util';

const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});

const receiveChannels = (payload) => ({
  type: RECEIVE_CHANNELS,
  payload
});

export const fetchChannel = (id) => dispatch => (
  ChannelApiUtil.fetchChannel(id).then((channel) => dispatch(receiveChannel(channel)))
);

export const fetchChannels = () => dispatch => (
  ChannelApiUtil.fetchChannels().then((channels) => dispatch(receiveChannels(channels)))
);

