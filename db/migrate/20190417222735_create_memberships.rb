class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false, index: true
      t.integer :channel_id, null: false, index: true
      t.integer :last_message_id_seen
      t.timestamps
    end
  end
end
