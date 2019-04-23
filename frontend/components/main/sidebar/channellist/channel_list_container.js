import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { allChannelsBelongingToUser } from '../../../../reducers/selectors';

const mapStateToProps = state => ({
  channels: allChannelsBelongingToUser(state, state.session.currentUser),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
