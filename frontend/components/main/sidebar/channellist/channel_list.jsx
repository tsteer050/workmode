import React from 'react';
import ChannelListItem from './channel_list_item';


class ChannelList extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

    let channels = this.props.channels.map((channel) => {
      return <ChannelListItem key={channel.id} channel={channel}/>
    });

    return (
      <div className="sidebar-channel-list">
        <ul>
          <li className="channel-browse-button">
            Channels
          </li>
          {channels}
          <li></li>
          <li className="channel-add-button">+ Add a channel</li>
        </ul>
      </div>
    )
  }

}

export default ChannelList;

