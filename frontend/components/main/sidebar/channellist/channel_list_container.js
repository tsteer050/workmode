import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { selectChannel } from '../../../../actions/channel_actions';
import { allChannelsBelongingToUser } from '../../../../reducers/selectors';

const mapStateToProps = state => ({
  channels: allChannelsBelongingToUser(state, state.session.currentUser),
  currentUserId: state.session.currentUser,
  members: state.entities.memberships, 
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  selectChannel: (id) => dispatch(selectChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
