class Api::MembershipsController < ApplicationController

  def index
    @memberships = Membership.all 
    render :index
  end

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render :show
    else

    end
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id, :channel_id)
  end


end
