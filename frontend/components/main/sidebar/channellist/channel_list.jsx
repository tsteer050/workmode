import React from 'react';
import ChannelListItemContainer from './channel_list_item_container';
import ChannelBrowseContainer from './channel_browse_container';


class ChannelList extends React.Component {

  constructor(props) {
    super(props);

  }

  handleClick() {
    let modal = document.getElementById('channel-browse-modal');
    modal.classList.toggle("show-modal");
  }

  render() {
    let nonDirect = this.props.channels.filter((channel) => channel.is_direct_message === false);
    let channels = nonDirect.map((channel) => {
      return <ChannelListItemContainer channelClass="channel-link" key={channel.id} channel={channel}/>
    });

    return (
      <div className="sidebar-channel-list">
        <ul>
          <li className="channel-browse-button">
            Channels
          </li>
          {channels}
          <li className="spacer"></li>
          <li className="channel-add-button" onClick={this.handleClick}>+ Add a channel</li>
        </ul>
        <ChannelBrowseContainer handleClick={this.handleClick}/>
      </div>
    )
  }

}

export default ChannelList;

