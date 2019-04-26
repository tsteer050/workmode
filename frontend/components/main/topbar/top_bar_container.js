import { connect } from 'react-redux';
import TopBar from './top_bar';
import { generateDirectMessageName } from '../../../reducers/selectors';

const mapStateToProps = state => {
  var title = "";
  const channel = state.entities.channels[state.ui.selected];
  if (channel) {
    if (!channel.is_direct_message) {
      title = "# " + state.entities.channels[state.ui.selected].title;
    } else {
      title = generateDirectMessageName(state, channel.id, state.session.currentUser);
    }
  } 
  
  return ({
    title
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

