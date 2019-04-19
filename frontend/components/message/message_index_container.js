import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageIndex from './message_index';

const mapStateToProps = (state, ownProps) => ({
    messages: Object.values(state.entities.channels[ownProps.match.params.channelId].messages),
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndex));