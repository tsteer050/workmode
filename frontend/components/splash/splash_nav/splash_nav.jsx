import React from 'react';
import { Link } from 'react-router-dom';

class SplashNav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }



  render() {

    return (
      <div className="splash-nav">
        <Link to="/" className="splash-nav-slack-logo" />
        <ul className="splash-nav-items">
          <li>
            <p>Product</p>
          </li>
          <li>
            <p>Pricing</p>
          </li>
          <li>
            <p>Support</p>
          </li>
          <li className="splash-nav-namespace-item">
            <div className="splash-nav-app-academy-logo" />
            <p>App Academy</p>
          </li>
          <li id="splash-nav-ellipses-button">
            <p>...</p>
          </li>

        </ul>
      </div>
    )
  }
}


export default SplashNav;