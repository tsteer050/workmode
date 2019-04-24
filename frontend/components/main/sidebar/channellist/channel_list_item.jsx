import React from 'react';
import { Link } from 'react-router-dom';

const ChannelListItem = ({ channel, selectedChannelId, selectChannel, channelClass, title}) => {
  let liClass;
  if (selectedChannelId == channel.id) {
    liClass = 'channel-list-li selected-channel';
  } else {
    liClass = 'channel-list-li';
  }
  return (
    <li className={liClass}>
      <Link onClick={() => selectChannel(channel.id)} className={channelClass} to={`/channels/${channel.id}`}>{title}</Link>
    </li>
  )
};

export default ChannelListItem;


