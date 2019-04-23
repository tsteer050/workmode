import React from 'react';
import { Link } from 'react-router-dom';

const ChannelListItem = ({ channel, selectChannel, channelClass, title}) => {

  return (
    <li>
      <Link onClick={() => selectChannel(channel.id)} className={channelClass} to={`/channels/${channel.id}`}>{title}</Link>
    </li>
  )
};

export default ChannelListItem;


