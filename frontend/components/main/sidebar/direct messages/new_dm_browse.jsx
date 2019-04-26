import React from 'react';
import UserListItemContainer from './user_list_item_container';


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
      return <UserListItemContainer
        handleDMCreate={this.handleDMCreate}
        key={user.id} 
        user={user} 
        currentUser={this.props.currentUser}
        closeDMModal={this.props.closeDMModal}
        selectChannel={this.props.selectChannel}
        />
    });

    return (
      <div id="dm-browse-modal" className="dm-browse-modal">
        <div className="close-modal-button" onClick={this.props.closeDMModal}>
          <h1>X</h1>
          <h2>esc</h2>
        </div>
        <h1 id="dm-title">Direct Messages</h1>
        <h5>Related users</h5>
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



