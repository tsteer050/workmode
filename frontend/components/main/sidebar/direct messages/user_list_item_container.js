import { connect } from 'react-redux';
import UserListItem from './user_list_item';
import { directMessageAlreadyExists } from '../../../../reducers/selectors';




const mapStateToProps = (state, ownProps) => {
  const dmId = directMessageAlreadyExists(state, ownProps.currentUser.id, ownProps.user.id);
  var handler;
  if (dmId == -1) {
    handler = () => ownProps.handleDMCreate(ownProps.currentUser, ownProps.user);
  } else {
    handler = () => {
      const thisDmId = dmId;
      ownProps.selectChannel(thisDmId);
      ownProps.closeDMModal();
    };
  }

  return({
    handler 
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);