import React from 'react';

const UserListItem = ({ user, currentUser, handleDMCreate }) => {

  return (
    <li onClick={() => handleDMCreate(currentUser, user)}>
      <div className="user-list-profile-pic" />
      <div >
        {user.username}
      </div>
    </li>
  )
};

export default UserListItem;
