class ChangeSubscribersToSubscribed < ActiveRecord::Migration[5.2]
  def change
    rename_column :channels, :subscribers, :subscribed
  end
end
