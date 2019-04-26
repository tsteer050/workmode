import React from 'react';

const UserListItem = ({ user, currentUser, handleDMCreate, handler }) => {
  return (
    <li onClick={handler}>
      <div className="user-list-profile-pic" />
      <div >
        {user.username}
      </div>
    </li>
  )
};

export default UserListItem;


// () => handleDMCreate(currentUser, user)