class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)

    if @message.save
      render '/api/messages/show'
    else 
      
    end
  end

  def destroy

  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end

end
