export const generateDirectMessageName = (channelId, currentUserId, members, users) => {
  const memberships = Object.values(members).filter((membership) => membership.channel_id == channelId);
  const nonCurrentMember = Object.values(memberships).filter((membership) => membership.user_id != currentUserId);
  const user = users[nonCurrentMember[0].user_id];
  return user.username;
}