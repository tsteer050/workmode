import React from 'react';
import MessageIndexContainer from '../message/message_index_container';

class ChannelView extends React.Component {

  constructor(props) {
    super(props);
  } 

  render() {

    return (
      <div id="messages-container" className="messages-container">
        <MessageIndexContainer />
      </div>
    )
  }

}

export default ChannelView;