import { connect } from 'react-redux';
import DMList from './dm_list';
import { allDirectMessagesOfUser } from '../../../../reducers/selectors';

const mapStateToProps = state => {
  let temp = allDirectMessagesOfUser(state, state.session.currentUser);
  return({
    directMessages: allDirectMessagesOfUser(state, state.session.currentUser)
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DMList);
