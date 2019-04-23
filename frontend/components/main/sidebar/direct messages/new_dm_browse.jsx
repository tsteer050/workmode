import React from 'react';
import UserListItem from './user_list_item';


class NewDMBrowse extends React.Component {

  constructor(props) {
    super(props);
    this.handleDMCreate = this.handleDMCreate.bind(this);
  }

  handleDMCreate(currentUser, secondUser){
    this.props.createDirectMessage({
      title: `${currentUser.username} + ${secondUser.username} DM`,
      is_direct_message: true
    }, secondUser.id)
      .then((channel) => this.props.selectChannel(channel.id));
    this.props.closeDMModal();
  }

  render() {

    let otherUsers = this.props.users.map((user) => {
      return <UserListItem 
        handleDMCreate={this.handleDMCreate}
        key={user.id} 
        user={user} 
        currentUser={this.props.currentUser}
        />
    });

    return (
      <div id="dm-browse-modal" className="dm-browse-modal">
        <div className="close-modal-button" onClick={this.props.closeDMModal}>
          <h1>X</h1>
          <h2>esc</h2>
        </div>
        <h1>Direct Messages</h1>
        <div className="dm-browse-list-container">
          <ul>
            {otherUsers}
          </ul>
        </div>
      </div>
    )
  }

}

export default NewDMBrowse;



