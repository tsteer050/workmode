import React from 'react';

const UserListItem = ({ user, currentUser, handleDMCreate }) => {

  return (
    <li onClick={() => handleDMCreate(currentUser, user)}>
      <div >
        {user.username}
      </div>
    </li>
  )
};

export default UserListItem;
