import { connect } from 'react-redux';
import DMList from './dm_list';
import { selectChannel } from '../../../../actions/channel_actions';
import { allDirectMessagesOfUser } from '../../../../reducers/selectors';

const mapStateToProps = state => ({
  directMessages: allDirectMessagesOfUser(state, state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  selectChannel: (id) => dispatch(selectChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DMList);
