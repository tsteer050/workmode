import React from 'react';
import ChannelListItem from '../channellist/channel_list_item';
import NewDMBrowseContainer from './new_dm_browse_container';


class DMList extends React.Component {

  constructor(props) {
    super(props);

  }

  toggleDMModal() {
    let modal = document.getElementById('dm-browse-modal');
    modal.classList.toggle("show-modal");
  }

  render() {
    debugger
    let directMessages = this.props.directMessages.map((channel) => {
      return <ChannelListItem channelClass="channel-link" selectChannel={this.props.selectChannel} key={channel.id} channel={channel} />
    });

    return (
      <div className="sidebar-dm-list">
        <ul>
          <li></li>
          <li className="dm-browse-button" onClick={this.toggleDMModal}>
            Direct Messages
          </li>
          <li className="dms-add-button">
             <NewDMBrowseContainer closeDMModal={this.toggleDMModal} />
          </li>
            {directMessages}
          <li></li>
        </ul>

      </div>
    )
  }

}

export default DMList;

