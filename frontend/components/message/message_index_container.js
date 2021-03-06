import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageIndex from './message_index';
import { allMessagesByChannelId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {

    return ({
        messages: allMessagesByChannelId(state, ownProps.match.params.channelId),
        users: state.entities.users
    });
    
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndex));
