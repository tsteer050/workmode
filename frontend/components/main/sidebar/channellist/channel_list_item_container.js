import { connect } from 'react-redux';
import ChannelListItem from './channel_list_item';
import { generateDirectMessageName } from '../../../../reducers/selectors';
import { selectChannel } from '../../../../actions/channel_actions';


const mapStateToProps = (state, ownProps) => {

  let title;
  if (ownProps.channel.is_direct_message === true) {
    title = generateDirectMessageName(state, ownProps.channel.id, state.session.currentUser);
  } else {
    title = ownProps.channel.title;
  }

  return ({
    title,

  });

};

const mapDispatchToProps = dispatch => ({
  selectChannel: (id) => dispatch(selectChannel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListItem);
