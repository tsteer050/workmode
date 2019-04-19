import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchMemberships } from '../../../actions/membership_actions';
import { fetchChannels } from '../../../actions/channel_actions';

const mapStateToProps = state => {

  let currentUser = state.entities.users[state.session.currentUser];

  return {
    currentUser: currentUser,
    channels: state.entities.channels

  };
};

const mapDispatchToProps = dispatch => ({
  fetchMemberships: () => dispatch(fetchMemberships()),
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);