class Message < ApplicationRecord

  belongs_to :channel
  belongs_to :user,
  foreign_key: :author_id

  
end
