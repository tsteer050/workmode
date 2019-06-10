class AddPhotoUrlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :photo_url, :string, :default => "https://secure.gravatar.com/avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg?s=512&d=https%3A%2F%2Fdev.slack.com%2Fimg%2Favatars%2Fava_0010-512.v1443724322.png"
  end
end
