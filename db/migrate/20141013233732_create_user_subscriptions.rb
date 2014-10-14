class CreateUserSubscriptions < ActiveRecord::Migration
  def change
    create_table :user_subscriptions do |t|
      t.integer :user_id, :null => false
      t.integer :subscription_id, :null => false
      t.datetime :expires_at
      
      t.timestamps
    end
  end
end
