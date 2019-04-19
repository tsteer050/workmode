class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.boolean :is_direct_message, null: false
      t.timestamps
    end
  end
end
