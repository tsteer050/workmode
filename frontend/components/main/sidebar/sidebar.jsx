import React from 'react';
import AccountDropdownContainer from './account dropdown/account_dropdown_container';
import ChannelListContainer from './channellist/channel_list_container';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.getMemberChannels = this.getMemberChannels.bind(this);
    
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
    this.props.fetchChannels();
    document.addEventListener('click', this.handler);

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


  render() {


    return (
      <div className="main-sidebar">
        <div className="sidebar-account-main">
          <button id="sidebar-username-tab" className="sidebar-username-tab" onClick={this.handleDropdownClick}>
            <h3>App Academy &#709;</h3>
              <h3></h3>
              <h4>&#8226;</h4>
              <h5>{this.props.currentUser.username}</h5>
          </button>
          <div className="sidebar-account-dropdown">
            <AccountDropdownContainer />
          </div>
        </div>
        <ChannelListContainer />
        
      </div>
    );
  };
}

export default Sidebar;