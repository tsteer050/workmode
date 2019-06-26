# README

This README would normally document whatever steps are necessary to get the
application up and running.

![workmode-ss](https://user-images.githubusercontent.com/6785491/60200111-4d89b780-97fa-11e9-8134-c79e8e922825.png)


![Screen Shot 2019-06-26 at 10 07 15 AM](https://user-images.githubusercontent.com/6785491/60200061-31861600-97fa-11e9-8036-1e455c9c37c8.png)

Create the connection to a channel
```
import { ActionCable } from 'react-actioncable-provider';

<ActionCable
channel={{ channel: 'ChannelsChannel' }}
onReceived={this.handleReceivedChannel}
/>
```

Wrap the app in action cable provider
```
<ActionCableProvider url={API_WS_ROOT}>
<App />
</ActionCableProvider>
```

Sample of messages controller broadcasting to actioncable
```
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

private

def message_params
params.require(:message).permit(:body, :author_id, :channel_id)
end

end
```

Sample filter for redux state (to find users eligible for direct messages.  must be members of same channel)
```
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

jbuilder response from adding channel (api channels index view)
```
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


Messages channel socket
```
class MessagesChannel < ApplicationCable::Channel
def subscribed
channel = Channel.find_by(id: params[:channelId])
stream_for channel
end

end
```

Channel search filtering
```
handleChange(e) {
let currentChannels = [];
let filteredChannels = [];

if (e.target.value !== "") {
currentChannels = this.props.nonMemberChannels;
filteredChannels = currentChannels.filter(channel => {
return channel.title.toLowerCase().includes(e.target.value.toLowerCase());
});
} else {
filteredChannels = this.props.nonMemberChannels;
}
this.setState({
filtered: filteredChannels
});
}
```
