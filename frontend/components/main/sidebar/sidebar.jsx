import React from 'react';
import AccountDropdownContainer from './account dropdown/account_dropdown_container';
import ChannelListContainer from './channellist/channel_list_container';
import DMListContainer from './direct messages/dm_list_container';
import Cable from '../../socket/cable.js';
import { ActionCable } from 'react-actioncable-provider';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.getMemberChannels = this.getMemberChannels.bind(this);
    this.handleReceivedChannel = this.handleReceivedChannel.bind(this);
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this);
  }

  handler(event) {
    var dropdown = document.getElementById('account-dropdown');
    var button = document.getElementById('sidebar-username-tab');
    var isClickInside = (dropdown.contains(event.target) || button.contains(event.target));



    if (!isClickInside) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  };



  componentDidMount() {

    this.props.fetchChannels()
      .then((action) => this.props.selectChannel(Object.keys(action.payload.channels)[0]))
      .then((action) => this.props.history.push(`/channels/${action.selected}`));
    document.addEventListener('click', this.handler);

    this.props.setModals();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handler);
  }

  handleDropdownClick() {
    document.getElementById("account-dropdown").classList.toggle("show");
  }

  getMemberChannels() {
    let channels = [];
    Object.values(this.props.channels).forEach((channel) => {
      if (channel.id === this.props.currentUser.id) {
        channels.push(channel);
      }
    });
    return channels;
  }

  handleReceivedChannel(response) {
    this.props.receiveChannel(response);
  };

  handleReceivedMessage(response) {
    this.props.receiveMessage(response);
  };


  render() {
    return (
      <div className="main-sidebar">

        <ActionCable
               channel={{ channel: 'ChannelsChannel' }}
          onReceived={this.handleReceivedChannel}
        />

        {Object.values(this.props.channels).length ? (
          <Cable
            channels={Object.values(this.props.channels)}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}

        <div className="sidebar-account-main">
          <button id="sidebar-username-tab" className="sidebar-username-tab" onClick={this.handleDropdownClick}>
            <h3>GeneriCo &#9662;<i className="far fa-bell"></i></h3>
              <h3></h3>
              <h4>&#8226;</h4>
              <h5>{this.props.currentUser.username}</h5>
          </button>
          <div className="sidebar-account-dropdown">
            <AccountDropdownContainer />
          </div>
        </div>
        <ChannelListContainer />
        <DMListContainer />
      </div>
    );
  };
}

export default Sidebar;