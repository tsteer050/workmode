import React from 'react';

const MessageIndexItem = ({ message, users }) => {

  var date = new Date(message.created_at);
  var time = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="message-index-item">
      <div className="message-profile-pic-container">
        <div className="message-profile-pic"/>
      </div>
      <div className="message-text">
        <div className="message-top-info">
          <h1 className="message-username">{users[message.author_id].username}</h1>
          <h5 className="message-timestamp">{time}</h5>
        </div>
        <h4 className="message-body">{message.body}</h4>
      </div>

    </div>
  )
};

export default MessageIndexItem;