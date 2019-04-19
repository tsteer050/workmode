class Api::MembershipsController < ApplicationController

  def index
    @memberships = Membership.all 
    render :index
  end

end
