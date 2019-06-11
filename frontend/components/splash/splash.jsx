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
          <h1>Imagine what you'll accomplish together</h1>
          <div className='splash-image-window-1'></div>
          <div className='splash-image-window-2'></div>
          <div className='splash-image-window-3'></div>



          <div className="splash-description">
            <p>Workmode is a collaboration hub for work, no matter what work you do.
            It’s a place where conversations happen, decisions are made, and
            information is always at your fingertips.</p>
            <p>Try Workmode with your team for free</p>
          </div>
          <div className="splash-auth-links">
            <Link to="/signup" className="splash-signup-call-link"><button className="get-started-button" type="button">GET STARTED</button></Link>
            <p className="splash-signup-call">Already using Workmode?  <Link to="/login">Sign in.</Link></p>
            
          </div>
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
