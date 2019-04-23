import React from 'react';
import { Link } from 'react-router-dom';
import { generateDirectMessageName } from '../../../../util/display_utils';

const ChannelListItem = ({ channel, selectChannel, channelClass, currentUserId, members, users }) => {
  let title = generateDirectMessageName(channel.id, currentUserId, members, users);
  if (channel.is_direct_message === false) {
    title = '# ' + channel.title;
  }
  return (
    <li>
      <Link onClick={() => selectChannel(channel.id)} className={channelClass} to={`/channels/${channel.id}`}>{title}</Link>
    </li>
  )
};

export default ChannelListItem;


