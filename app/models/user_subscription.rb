class UserSubscription < ActiveRecord::Base
  # t.integer  "user_id",         null: false
  # t.integer  "subscription_id", null: false
  # t.datetime "expires_at"
  
  
  belongs_to :user,
             :primary_key => :id,
             :foreign_key => :user_id,
             :class_name => 'User'
  
  
  belongs_to :subscription,
             :primary_key => :id,
             :foreign_key => :subscription_id,
             :class_name => 'Subscription'
end
