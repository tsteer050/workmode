import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage } from '../../actions/message_actions';
import { generateDirectMessageName } from '../../reducers/selectors';

const mapStateToProps = (state, { match } ) => {

  let currentUser = state.entities.users[state.session.currentUser];
  let channelId;

  if (state.ui.selected) {
    channelId = state.ui.selected;
  } else {
    channelId = null;
  }

  let channelTitle;

  if (state.entities.channels[channelId]) {
    if (state.entities.channels[channelId].is_direct_message) {
      channelTitle = generateDirectMessageName(state, channelId, state.session.currentUser);
    } else {
      channelTitle = '# ' + state.entities.channels[channelId].title;
    }
  } else {
    channelTitle = '';
  }


  return ({
    currentUser,
    channelId,
    channelTitle
  });

};

const mapDispatchToProps = dispatch => ({

  createMessage: (message) => dispatch(createMessage(message))

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);