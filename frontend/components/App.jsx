import React from 'react';
import SplashWindow from './splash/splash_window/splash_window';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import MainView from './main/main_view';



export default () => (
  <div className="page-contents">
    <AuthRoute path="/" component={SplashWindow} />
    <ProtectedRoute path="/" component={MainView} />
  </div>
);