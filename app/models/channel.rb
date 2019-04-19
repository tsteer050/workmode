class Channel < ApplicationRecord

  has_many :memberships
  has_many :messages

end
