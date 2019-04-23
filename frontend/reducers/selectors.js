export const allMessagesByChannelId = (state, channelId) => {
  const messages = Object.values(state.entities.messages).filter((message) => message.channel_id == channelId);  
  return messages;  
};

export const allChannelsBelongingToUser = (state, userId) => {
  const memberships = Object.values(state.entities.memberships).filter((membership) => membership.user_id == userId);
  const channelIds = memberships.map((membership) => membership.channel_id);
  const channels = Object.values(state.entities.channels).filter((channel) => channelIds.includes(channel.id));
  return channels;
};

export const allNonMemberChannels = (state, userId) => {
  const memberships = Object.values(state.entities.memberships).filter((membership) => membership.user_id == userId);
  const channelIds = memberships.map((membership) => membership.channel_id);
  const channels = Object.values(state.entities.channels).filter((channel) => !channelIds.includes(channel.id));
  return channels;
};

export const allUsersOfMemberChannels = (state, userId) => {
  const userMemberships = Object.values(state.entities.memberships)
    .filter((membership) => membership.user_id == userId);
  const channelIds = userMemberships.map((membership) => membership.channel_id);
  const channelMemberships = Object.values(state.entities.memberships)
    .filter((membership) => channelIds.includes(membership.channel_id));
  const userIds = Object.values(channelMemberships).map((membership) => membership.user_id);
  const users = Object.values(state.entities.users)
    .filter((user) => userIds.includes(user.id))
    .filter((user) => user.id != userId);
  return users;
};

export const allDirectMessagesOfUser = (state, userId) => {
  const memberships = Object.values(state.entities.memberships).filter((membership) => membership.user_id == userId);
  const channelIds = memberships.map((membership) => membership.channel_id);
  const channels = Object.values(state.entities.channels).filter((channel) => channelIds.includes(channel.id));
  const directMessages = channels.filter((channel) => channel.is_direct_message === true);
  return directMessages;
};



