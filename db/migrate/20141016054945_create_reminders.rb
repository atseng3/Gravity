class CreateReminders < ActiveRecord::Migration
  def change
    create_table :reminders do |t|
      t.integer :user_subscription_id, null: false
      t.integer :days_before, default: 1
      t.boolean :active, default: true 

      t.timestamps
    end
  end
end
