import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';

const MainView = () => {

  return (
    <div className="main-view">
      <SidebarContainer />
      <div className="main-message-area">
        <h1>Main message area</h1>
      </div>
    </div>
  )
};

export default MainView;