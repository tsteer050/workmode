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

export const generateDirectMessageName = (state, channelId, currentUserId) => {
  const memberships = Object.values(state.entities.memberships).filter((membership) => membership.channel_id == channelId);
  const nonCurrentMember = Object.values(memberships).filter((membership) => membership.user_id != currentUserId);
  const user = state.entities.users[nonCurrentMember[0].user_id];
  return user.username;
};



export const directMessageAlreadyExists = (state, currentUserId, otherUserId) => {
  const memberships = Object.values(state.entities.memberships).filter((membership) => membership.user_id == currentUserId);
  const channelIds = memberships.map((membership) => membership.channel_id);
  const channels = Object.values(state.entities.channels).filter((channel) => channelIds.includes(channel.id));
  const directMessages = Object.values(channels).filter((channel) => channel.is_direct_message === true);
  const directMessageIds = directMessages.map((dm) => dm.id);
  const otherUserMemberships = Object.values(state.entities.memberships).filter((membership) => directMessageIds.includes(membership.channel_id) && membership.user_id !== currentUserId);
  const existingMessageMembership = Object.values(otherUserMemberships).filter((membership) => membership.user_id == otherUserId);
  if (existingMessageMembership.length > 0) {
    return existingMessageMembership[0].channel_id;
  }
  return -1;
//   return channels;
};





// export const directMessageAlreadyExists = (state, currentUserId, otherUserId) => {
//   const channels = Object.values(state.entities.channels).filter((channel) => channel.is_direct_message === true);
//   const channelIds = channels.map((channel) => channel.id);
//   const memberships = Object.values(state.entities.memberships).filter((membership) => channelIds.includes(membership.channel_id));
//   const channel = Object.values(memberships).filter((membership) => membership.user_id == otherUserId);
// };