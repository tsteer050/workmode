import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors })=> ({
  formType: 'login',
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user)),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);