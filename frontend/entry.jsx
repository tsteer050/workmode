import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

  let preloadedState = undefined;
  if (window.currentUser) {
    let user = { [window.currentUser.id]: window.currentUser };
    preloadedState = {
      entities: {
        users: user
      },
      session: {
        currentUser: window.currentUser.id
      }
    };
  }
  
  let store = configureStore(preloadedState);
  window.getState = store.getState;
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});

