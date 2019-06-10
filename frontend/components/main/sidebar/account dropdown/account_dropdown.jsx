import React from 'react';

class AccountDropdown extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div id="account-dropdown">
        <div className="account-dropdown-user">
          <div className="account-dropdown-profile-pic" 
            style={{
              backgroundImage: "url(" + this.props.currentUser.photo_url + ")",
            }} />
          <h3>{this.props.currentUser.username}</h3>
        </div>
        <div className="account-dropdown-logout-items">
          <ul>
            <li onClick={this.props.logout}>Log out</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default AccountDropdown;