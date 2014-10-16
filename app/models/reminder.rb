class Reminder < ActiveRecord::Base
  # t.integer "user_subscription_id", null: false
  # t.integer "days_before", default: 1
  # t.boolean "active", default: true
  
  belongs_to :user_subscription
end
