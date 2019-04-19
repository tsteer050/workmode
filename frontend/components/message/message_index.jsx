import React from 'react';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let messages = this.props.messages.map((message) => {
      return(
        <li key={message.id}>
          <MessageIndexItem message={message} users={this.props.users}/>
        </li>
      )
    });

    return (
      <div>
        <ul>
          {messages}
        </ul>
      </div>
    )
  }

}

export default MessageIndex;