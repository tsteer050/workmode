import React from 'react';
// import SignupFormContainer from './session/signup_form_container';
// import LoginFormContainer from './session/login_form_container';
import { Route, Switch } from 'react-router-dom';
// import SplashContainer from './splash/splash_container';
import SplashWindow from './splash/splash_window/splash_window';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import MainView from './main/main_view';



export default () => (
  <div className="page-contents">
    <AuthRoute path="/" component={SplashWindow} />
    <ProtectedRoute path="/" component={MainView} />
  </div>
);