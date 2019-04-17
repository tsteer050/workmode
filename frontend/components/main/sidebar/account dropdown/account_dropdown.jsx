import React from 'react';

class AccountDropdown extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="account-dropdown">
        <div className="account-dropdown-user">
          <div className="account-dropdown-profile-pic" />
          <h3>{this.props.currentUser.username}</h3>
        </div>
        <div className="account-dropdown-top-menu-options">
          <ul>
            <li>Set a status...</li>
            <li>Profile & account</li>
            <li>Preferences</li>
            <li>Set yourself to away</li>
            <li>Help & feedback</li>
          </ul>
        </div>
        <div className="account-dropdown-usage-items">

        </div>
        <div className="account-dropdown-logout-items">
          <ul>
            <li>Analytics</li>
            <li onClick={this.props.logout}>Log out</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default AccountDropdown;