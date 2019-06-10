import React from 'react';
import ChannelListItem from './channel_list_item';


class ChannelBrowse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleAddChannel = this.handleAddChannel.bind(this);
    this.mapNonMemberChannels = this.mapNonMemberChannels.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.nonMemberChannels
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.nonMemberChannels
    });
  }

  handleChange(e) {
    let currentChannels = [];
    let filteredChannels = [];

    if (e.target.value !== "") {
      currentChannels = this.props.nonMemberChannels;
      filteredChannels = currentChannels.filter(channel => {
        return channel.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
    } else {
      filteredChannels = this.props.nonMemberChannels;
    }
    this.setState({
      filtered: filteredChannels
    });
  }

  handleAddChannel(channelId) {
    this.props.createMembership({
      channel_id: channelId,
      user_id: this.props.currentUserId
    });
    this.props.selectChannel(channelId);
    this.props.handleClick();
  }

  mapNonMemberChannels() {
    let mappedChannels = this.state.filtered.map((channel) => {
      return <ChannelListItem selectChannel={this.handleAddChannel} channelClass="channel-browse-item" title={`# ${channel.title}`} key={channel.id} channel={channel} />
    });
    return mappedChannels;
  }

  render() {

  
    return (
      <div id="channel-browse-modal" className="modal-main-div">
        <div className="close-modal-button" onClick={this.props.handleClick}>
          <h1>X</h1>
          <h2>esc</h2>
        </div>
        <div className="modal-content">
          <h1 id="modal-title">Browse channels</h1>
          <input className="modal-search-input" type="text" onChange={(e) => this.handleChange(e)} placeholder="Search..." />
          <div className="channel-browse-list-container">
            <ul>
              <li id="channel-browse-first-item">Channels you can join</li>
              {this.mapNonMemberChannels()}
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default ChannelBrowse;

