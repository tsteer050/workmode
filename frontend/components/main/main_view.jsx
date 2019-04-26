import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import ChannelViewContainer from '../channel/channel_view_container';
import { ProtectedRoute } from '../../util/route_utils';
import MessageFormContainer from '../message/message_form_container';
import TopBarContainer from './topbar/top_bar_container';

const MainView = () => {

  return (
    <div className="main-view">
      <SidebarContainer />
      <div className="message-window">
        <TopBarContainer />
        <div className="main-message-area">
            <ProtectedRoute path="/channels/:channelId" component={ChannelViewContainer} />
        </div>
        <ProtectedRoute path="/" component={MessageFormContainer} />
      </div>
    </div>
  )
};

export default MainView;