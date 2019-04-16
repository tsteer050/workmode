import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';



export default () => (
  <div>
    
    <Switch>
      <Route exact path="/" component={Sidebar} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </Switch>
    
    
  </div>
);