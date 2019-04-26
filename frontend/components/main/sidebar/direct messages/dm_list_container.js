import { connect } from 'react-redux';
import DMList from './dm_list';
import { allDirectMessagesOfUser } from '../../../../reducers/selectors';
import { toggleDMModal } from '../../../../actions/modal_actions';
import { selectChannel } from '../../../../actions/channel_actions';

const mapStateToProps = state => {
  let temp = allDirectMessagesOfUser(state, state.session.currentUser);
  return({
    directMessages: allDirectMessagesOfUser(state, state.session.currentUser),
    dmModalRenders: state.ui.modals.dmModal.active,
  });
};

const mapDispatchToProps = dispatch => ({
  toggleDMModal: () => dispatch(toggleDMModal()), 

});

export default connect(mapStateToProps, mapDispatchToProps)(DMList);
