import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: this.state.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout = () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);