class Reminder < ActiveRecord::Base
  # t.integer  "user_subscription_id", null: false
  # t.integer  "days",                 default: 1
  # t.boolean  "active",               default: true
  
  belongs_to :user_subscription,
             :primary_key => :id,
             :foreign_key => :user_subscription_id,
             :class_name => 'UserSubscription'
             # :dependent => :destroy,
             # :inverse_of => :reminders
end
