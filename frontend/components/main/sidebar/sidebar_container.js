import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchMemberships } from '../../../actions/membership_actions';
import { fetchChannels } from '../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { selectChannel, receiveChannel } from '../../../actions/channel_actions';
import { receiveMessage } from '../../../actions/message_actions';
import { setModals } from '../../../actions/modal_actions';


const mapStateToProps = state => {
  let currentUser = state.entities.users[state.session.currentUser];
  return ({
    currentUser: currentUser,
    channels: state.entities.channels,

  });
};

const mapDispatchToProps = dispatch => ({
  fetchMemberships: () => dispatch(fetchMemberships()),
  fetchChannels: () => dispatch(fetchChannels()),
  receiveChannel: (response) => dispatch(receiveChannel(response)), 
  receiveMessage: (response) => dispatch(receiveMessage(response)),
  selectChannel: (id) => dispatch(selectChannel(id)),
  setModals: () => dispatch(setModals())
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));