class Api::ChannelsController < ApplicationController
  def index
      @channels = Channel.all
      render :index
  end

  def create 
    @channel = Channel.new(channel_params)
    if @channel.save 

      @current_user_membership = Membership.new({
        user_id: current_user.id,
        channel_id: @channel.id
      })
      @current_user_membership.save!

      @second_user_membership = Membership.new({
        user_id: params[:secondUserId],
        channel_id: @channel.id
      })
      @second_user_membership.save!

     

      data = render_to_string :show
      serialized_data = JSON.parse(data)
      # ActiveModelSerializers::Adapter::Json.new(
      #   ChannelSerializer.new(@channel)
      #   ).serializable_hash
      ActionCable.server.broadcast 'channels_channel', serialized_data
      head :ok


    else

    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :is_direct_message)
  end

end
