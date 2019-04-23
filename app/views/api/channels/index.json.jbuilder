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

