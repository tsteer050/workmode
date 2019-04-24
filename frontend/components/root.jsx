import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ActionCableProvider from 'react-actioncable-provider';
import { API_WS_ROOT } from '../constants/index';

const Root = ({ store }) => {
  return(
  
  <Provider store={store}>
    <HashRouter>
      <ActionCableProvider url={API_WS_ROOT}>
      <App />
      </ActionCableProvider>
    </HashRouter>
  </Provider>
)}

export default Root;




