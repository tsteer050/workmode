import React from 'react';
import ChannelListItem from './channel_list_item';


class ChannelBrowse extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddChannel = this.handleAddChannel.bind(this);
  }

  handleAddChannel(channelId) {
    this.props.createMembership({
      channel_id: channelId,
      user_id: this.props.currentUserId
    });
    this.props.selectChannel(channelId);
    this.props.handleClick();
  }

  render() {

    let nonMemberChannels = this.props.nonMemberChannels.map((channel) => {
      return <ChannelListItem selectChannel={this.handleAddChannel} key={channel.id} channel={channel} />
    });

    return (
      <div id="channel-browse-modal" className="channel-browse-modal">
        <div>About channels...</div>
        <div className="close-modal-button" onClick={this.props.handleClick}>
          <h1>X</h1>
          <h2>esc</h2>
        
        </div>
        <h1>Browse channels</h1>
        <div className="channel-browse-list-container">
          <ul>
            {nonMemberChannels}
          </ul>
        </div>
        
      </div>
    )
  }

}

export default ChannelBrowse;

