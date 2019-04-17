import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser]
});

export default connect(mapStateToProps, null)(Sidebar);