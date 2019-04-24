json.channel do 
  json.partial! 'channel', channel: @channel
end 


json.memberships do 
  json.set! @current_user_membership.id do 
    json.partial! 'membership', membership: @current_user_membership
  end
  
  json.set! @second_user_membership.id do 
    json.partial! 'membership', membership: @second_user_membership
  end

end

json.users do 
  @channel.messages.to_a.each do |message|
    json.set! message.author_id do 
      json.partial! 'user', user: message.user
    end
  end
end

json.messages do 
  @channel.messages.to_a.each do |message|
    json.set! message.id do 
      json.partial! 'message', message: message
    end
  end
end

