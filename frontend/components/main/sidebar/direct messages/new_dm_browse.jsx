import React from 'react';
import UserListItemContainer from './user_list_item_container';


class NewDMBrowse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleDMCreate = this.handleDMCreate.bind(this);
    this.mapFilteredUsers = this.mapFilteredUsers.bind(this);
  }


  componentDidMount() {
    this.setState({
      filtered: this.props.users
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.users
    });
  }

  handleChange(e) {
    let currentUsers = [];
    let filteredUsers = [];

    if (e.target.value !== "") {
      currentUsers = this.props.users;
      filteredUsers = currentUsers.filter(user => {
        return user.username.toLowerCase().includes(e.target.value.toLowerCase());
      });
    } else {
      filteredUsers = this.props.users;
    }
    this.setState({
      filtered: filteredUsers
    });
  }

  handleDMCreate(currentUser, secondUser){
    this.props.createDirectMessage({
      title: `${currentUser.username} + ${secondUser.username} DM`,
      is_direct_message: true
    }, secondUser.id)
      .then((channel) => this.props.selectChannel(channel.id));
    this.props.closeDMModal();
  }

  mapFilteredUsers() {
    let mappedUsers = this.state.filtered.map((user) => {
      return <UserListItemContainer
        handleDMCreate={this.handleDMCreate}
        key={user.id} 
        user={user} 
        currentUser={this.props.currentUser}
        closeDMModal={this.props.closeDMModal}
        selectChannel={this.props.selectChannel}
        channelClass="dm-browse-item"
        />
    });
    return mappedUsers;
  }

  render() {

    return (
      <div id="dm-browse-modal" className="modal-main-div">
        <div className="close-modal-button" onClick={this.props.closeDMModal}>
          <h1>X</h1>
          <h2>esc</h2>
        </div>
          <div className="modal-content">
          <h1 id="modal-title">Direct Messages</h1>
          <input className="modal-search-input" type="text" onChange={(e) => this.handleChange(e)} placeholder="Search..." />
          <div className="dm-browse-list-container">
            <ul>
              <li id="dm-browse-first-item">Related users</li>
              {this.mapFilteredUsers()}
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default NewDMBrowse;



