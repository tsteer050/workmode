import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const display = this.props.currentUser ? (
      <div>
        <p>Hi {currentUser.username}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      );
    return (
      <div>
        {display}
      </div>
    )
  }
}


export default Sidebar;