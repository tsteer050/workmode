import { connect } from 'react-redux';
import ChannelBrowse from './channel_browse';
import { selectChannel } from '../../../../actions/channel_actions';
import { createMembership } from '../../../../actions/membership_actions';
import { allNonMemberChannels } from '../../../../reducers/selectors';

const mapStateToProps = state => ({
  nonMemberChannels: allNonMemberChannels(state, state.session.currentUser),
  currentUserId: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  selectChannel: (id) => dispatch(selectChannel(id)),
  createMembership: (membership) => dispatch(createMembership(membership))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelBrowse);

