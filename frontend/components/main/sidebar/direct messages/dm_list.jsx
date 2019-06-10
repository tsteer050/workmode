import React from 'react';
import ChannelListItemContainer from '../channellist/channel_list_item_container';
import NewDMBrowseContainer from './new_dm_browse_container';


class DMList extends React.Component {

  constructor(props) {
    super(props);

  }

  // toggleDMModal() {
  //   let modal = document.getElementById('dm-browse-modal');
  //   modal.classList.toggle("show-modal");
  // }

  render() {
    
    let directMessages = this.props.directMessages.map((channel) => {
      return <ChannelListItemContainer channelClass="channel-link" key={channel.id} channel={channel} />
    });
    let dmModal = null;
    if (this.props.dmModalRenders) {
      dmModal = <NewDMBrowseContainer closeDMModal={this.props.toggleDMModal} />
    }

    return (
      <div className="sidebar-dm-list">
        <ul>
          <li className="spacer"></li>
          <li className="dm-browse-button" onClick={this.props.toggleDMModal}>
            Direct Messages <i className="fas fa-plus-circle"></i>
          </li>
          <li className="dms-add-button">
             {dmModal}
          </li>
            {directMessages}
          <li className="spacer"></li>
        </ul>

      </div>
    )
  }

}

export default DMList;

