import React from 'react';
import SplashNavContainer from '../splash_nav/splash_nav_container';
import SplashContainer from '../splash_container';
import SignupFormContainer from '../../session/signup_form_container';
import LoginFormContainer from '../../session/login_form_container';
import AboutPage from './about_page';

import { AuthRoute } from '../../../util/route_utils';
import { Switch } from 'react-router-dom';


const SplashWindow = () => {

  return (
    <div className="splash-items">
      <SplashNavContainer />
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/about" component={AboutPage} />
        <AuthRoute path="/" component={SplashContainer} />  
        
      </Switch>
      
    </div>
  )
};

export default SplashWindow;