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
          <div className="account-dropdown-usage-namespace-info">
            <div className="namespace-icon"></div>
            <div className="account-dropdown-usage-namespace-text">
              <h3>App Academy</h3>
              <h5>app-academy.slack.com</h5>
            </div>
          </div>
          <h4>Your workspace is currently on Slack's free plan.  See upgrate options</h4>
          <div className="account-usage-details">
            <div className="account-usage-details-text">
              <h3>Total messages</h3>
              <h5>Upgrate to access all of your messages</h5>
            </div>
            <div className="account-usage-amount-number">4.2m</div>
          </div>
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