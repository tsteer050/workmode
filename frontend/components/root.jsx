import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ActionCableProvider from 'react-actioncable-provider';

const Root = ({ store }) => {
  debugger
  return(
  
  <Provider store={store}>
    <HashRouter>
      <ActionCableProvider url='http://localhost:3000'>
      <App />
      </ActionCableProvider>
    </HashRouter>
  </Provider>
)}

export default Root;




