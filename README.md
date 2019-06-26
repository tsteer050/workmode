# Workmode

Workmode is a channel-based group messaging platform inspired by Slack.  Technologies used include Ruby on Rails, React & Redux. Messages are sent via websockets, which are implemented using ActionCable with [react-actioncable-provider](https://github.com/cpunion/react-actioncable-provider) on the frontend.  You can check out the live deployment [here.](https://workmode.herokuapp.com)  Make sure to follow the instructions in the About pane and open up a second incognito window to see the websockets in action.

---

![workmode-ss](https://user-images.githubusercontent.com/6785491/60200111-4d89b780-97fa-11e9-8134-c79e8e922825.png)


![Screen Shot 2019-06-26 at 10 07 15 AM](https://user-images.githubusercontent.com/6785491/60200061-31861600-97fa-11e9-8036-1e455c9c37c8.png)




To create the connections on the frontend, the entire application is wrapped in `ActionCableProvider`: 

```
// root.jsx

<ActionCableProvider url={API_WS_ROOT}>
  <App />
</ActionCableProvider>
```

...which allows `<ActionCable>` components to be created for each individual connection.

```
// sidebar.jsx

import { ActionCable } from 'react-actioncable-provider';

...

<ActionCable
  channel={{ channel: 'ChannelsChannel' }}
  onReceived={this.handleReceivedChannel}
/>
```

Two different sockets are implemented: one to send and receive channel memberships and another for messages, with each channel sending and receiving messages using a unique `channel_id` over the `MessagesChannel` socket.

```
// messages_controller.rb

class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    channel = Channel.find(message_params[:channel_id])

    if @message.save
      data = render_to_string '/api/messages/show'
      serialized_data = JSON.parse(data)
      MessagesChannel.broadcast_to channel, serialized_data
      head :ok
    end
  end

...

end
```

Users are able to send direct messages (specially flagged channels) to other users who share membership in a common channel.  As such, Redux needs to receive additional `user` and `message` data when a new channel `membership` is created.  This is accomplished via jbuilder in `/views/api/channels` as follows:

```
// index.json.jbuilder

json.channels do 
  @channels.each do |channel|
    json.set! channel.id do 
      json.partial! 'channel', channel: channel
      
    end
  end
end 


json.memberships do 
  @channels.each do |channel|
    channel.memberships.each do |membership|
      json.set! membership.id do 
      json.partial! 'membership', membership: membership
      end
    end
  end
end

json.users do 
  @channels.each do |channel|
      channel.messages.to_a.each do |message|
        json.set! message.author_id do 
          json.partial! 'user', user: message.user
        end
      end
  end
end

json.messages do 
  @channels.each do |channel|
      channel.messages.to_a.each do |message|
        json.set! message.id do 
          json.partial! 'message', message: message
        end
      end
  end
end
```

The actual filtering of these results takes place in individual component containers based on the data required.  The following example shows the filter that determines which other users are eligible to be messaged directly by the currently logged in user:

```
// selectors.js

export const allUsersOfMemberChannels = (state, userId) => {
  const userMemberships = Object.values(state.entities.memberships)
    .filter((membership) => membership.user_id == userId);
  const channelIds = userMemberships.map((membership) => membership.channel_id);
  const channelMemberships = Object.values(state.entities.memberships)
    .filter((membership) => channelIds.includes(membership.channel_id));
  const userIds = Object.values(channelMemberships).map((membership) => membership.user_id);
  const users = Object.values(state.entities.users)
    .filter((user) => userIds.includes(user.id))
    .filter((user) => user.id != userId);
  return users;
};
```


