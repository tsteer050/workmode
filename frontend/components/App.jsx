import React from 'react';
import Signup from './session/signup';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';



export default () => (
  <div>
    <Switch>
      <Route path="/" component={Sidebar} />
      <Route path="/signup" component={Signup} />
    </Switch>
    
  </div>
);