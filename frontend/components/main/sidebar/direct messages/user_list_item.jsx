import React from 'react';

const UserListItem = ({ user, currentUser, handleDMCreate, handler, channelClass }) => {
  return (
    <li className={channelClass} onClick={handler}>
      <div 
        style={{
          backgroundImage: "url(" + user.photo_url + ")",
        }} 
        className="user-list-profile-pic"/>
      <div >
        {user.username}
      </div>
    </li>
  )
};

export default UserListItem;