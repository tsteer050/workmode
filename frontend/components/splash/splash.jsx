import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  
  render() {
    const display = this.props.currentUser ? (
      <div>
        <p>Hi {this.props.currentUser.username}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
        <div className="splash-main">
          <i className="fas fa-comment comment-bubble number-1 fast-orbit"></i>
          <i className="fas fa-comment comment-bubble number-2 fast-orbit counter-clockwise-orbit"></i>
          <i className="fas fa-comment comment-bubble number-3 slow-orbit clockwise-orbit"></i>
          <i className="fas fa-comment comment-bubble number-4 slow-orbit counter-clockwise-orbit"></i>
          <i className="fas fa-comment comment-bubble number-5 medium-orbit clockwise-orbit"></i>
          <i className="fas fa-comment comment-bubble number-6 slow-orbit counter-clockwise-orbit"></i>
          <i className="fas fa-comment comment-bubble number-7 fast-orbit counter-clockwise-orbit"></i>
          <i className="fas fa-comment comment-bubble number-8 medium-orbit counter-clockwise-orbit"></i>
          <i className="fas fa-comment comment-bubble number-9 fast-orbit clockwise-orbit"></i>

          <h1 className="top-h1">Whatever work you do,</h1>
          <h1>you can do it with Workmode</h1>



          <div className="splash-description">
            <p>Workmode gives your team the power and alignment you need to do your best work.</p>
          </div>

          <Link to="/signup" className="splash-signup-call-link"><button className="get-started-button" type="button">GET STARTED</button></Link>
          <p className="splash-signup-call">Already using Workmode?  <Link to="/login">Sign in.</Link></p>
        </div>
      );
    return (
      <div className="splash-login-items">
        {display}
      </div>
    )
  }
}




export default Splash;
