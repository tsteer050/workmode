import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.body.length > 0) {
      this.props.createMessage({
        body: this.state.body,
        author_id: this.props.currentUser.id,
        channel_id: this.props.channelId
      });
      this.setState({ body: '' });
    }
    
  }

  render() {
    return (
      <div className="textbox-area">
        <form onSubmit={this.handleSubmit}>
          <input className="new-message-text-box" placeholder={`Message ${this.props.channelTitle}`} type="text" value={this.state.body} onChange={this.handleInput}/>
        </form>
      </div>
    )
  }
}

export default MessageForm;