import React from 'react';
import { Link } from 'react-router-dom';

const ChannelListItem = ({ channel }) => {

  return (
    <li>
      <Link className="channel-link" to={`/channels/${channel.id}`}># {channel.title}</Link>
    </li>
  )
};

export default ChannelListItem;


