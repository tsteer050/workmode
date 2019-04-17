import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, exact, path, component: Component }) => (
  <Route 
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Redirect to='/' /> : <Component {...props} />
    )}
    />
);

const Protected = ({ loggedIn, exact, path, component: Component }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to='/' />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));