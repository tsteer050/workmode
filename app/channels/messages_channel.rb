class MessagesChannel < ApplicationCable::Channel
  def subscribed
    channel = Channel.find_by(id: params[:channelId])
    stream_for channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
