import { connect } from 'react-redux';
import NewDMBrowse from './new_dm_browse';
import { selectChannel, createDirectMessage } from '../../../../actions/channel_actions';
import { allUsersOfMemberChannels } from '../../../../reducers/selectors';

const mapStateToProps = state => ({
  users: allUsersOfMemberChannels(state, state.session.currentUser),
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
  selectChannel: (id) => dispatch(selectChannel(id)),
  createDirectMessage: (channel, secondUserId) => dispatch(createDirectMessage(channel, secondUserId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDMBrowse);

