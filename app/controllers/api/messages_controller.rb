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

  def destroy

  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end

end
