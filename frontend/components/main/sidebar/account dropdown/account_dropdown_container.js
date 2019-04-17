import { connect } from 'react-redux';
import AccountDropdown from './account_dropdown';
import { logout } from '../../../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdown);