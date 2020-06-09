class RemoveSubscriberIdFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :subscriber_id
  end
end
