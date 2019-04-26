import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { allChannelsBelongingToUser } from '../../../../reducers/selectors';
import { toggleChannelListModal } from '../../../../actions/modal_actions';

const mapStateToProps = state => ({
  channels: allChannelsBelongingToUser(state, state.session.currentUser),
  channelListModalRenders: state.ui.modals.channelListModal.active
});

const mapDispatchToProps = dispatch => ({
  toggleChannelListModal: () => dispatch(toggleChannelListModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
