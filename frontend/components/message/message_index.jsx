import React from 'react';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) return <div></div>;

    let messages = this.props.messages.map((message) => {
      return(
        <li key={message.id}>
          <MessageIndexItem message={message} users={this.props.users}/>
        </li>
      )
    });

   

    return (
      <div className="messages-index">
        <ul>
          {messages}
        </ul>
      </div>
    )
  }

}

export default MessageIndex;