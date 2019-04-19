import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import ChannelViewContainer from '../channel/channel_view_container';
import { ProtectedRoute } from '../../util/route_utils';

const MainView = () => {

  return (
    <div className="main-view">
      <SidebarContainer />
      <div className="message-window">
        <div className="main-message-area">
            <ProtectedRoute path="/channels/:channelId" component={ChannelViewContainer} />
        </div>
        <div className="textbox-area">
        </div>
      </div>
    </div>
  )
};

export default MainView;