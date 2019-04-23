class Api::ChannelsController < ApplicationController
  def index
      @channels = Channel.all
      render :index
  end

  def create 
    @channel = Channel.new(channel_params)
    if @channel.save 

      @currentUserMembership = Membership.new({
        user_id: current_user.id,
        channel_id: @channel.id
      })
      @currentUserMembership.save 

      @secondUserMembership = Membership.new({
        user_id: params[:secondUserId],
        channel_id: @channel.id
      })
      @secondUserMembership.save 
      render :show
    else

    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :is_direct_message)
  end

end
