import ChannelView from './channel_view';
import { connect } from 'react-redux';
import { fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, { match }) => ({
  channelId: parseInt(match.params.channelId)
});

const mapDispatchToProps = dispatch => ({
  fetchChannel: (id) => dispatch(fetchChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);