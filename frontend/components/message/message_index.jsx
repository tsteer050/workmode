import React from 'react';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    var element = document.getElementById("messages-index");
    element.scrollTop = element.scrollHeight;
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
      <div id="messages-index" className="messages-index">
        <ul>
          {messages}
        </ul>
      </div>
    )
  }

}

export default MessageIndex;