import React from 'react';
import AccountDropdownContainer from './account dropdown/account_dropdown_container';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDropdownClick() {
    document.getElementById("account-dropdown").classList.toggle("show");
  }

  render() {
    return (
      <div className="main-sidebar">
        <div className="sidebar-account-main">
          <button className="sidebar-username-tab" onClick={this.handleDropdownClick}>
            <h3>App Academy &#709;</h3>
              <h3></h3>
              <h4>&#8226;</h4>
              <h5>{this.props.currentUser.username}</h5>
          </button>
          <div className="sidebar-account-dropdown">
            <AccountDropdownContainer />
          </div>
        </div>
        <div className="sidebar-channel-list">
          <ul>
            <li>Channels</li>
            <li># 2019-01-07 Online</li>
            <li># General</li>
            <div className="spacer"></div>
            <li>Add Channel</li>
          </ul>
        </div>
        
      </div>
    );
  };
}

export default Sidebar;