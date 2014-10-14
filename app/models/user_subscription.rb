class UserSubscription < ActiveRecord::Base
  belongs_to :user,
             :primary_key => :id,
             :foreign_key => :user_id,
             :class_name => 'User'
  
  
  belongs_to :subscription,
             :primary_key => :id,
             :foreign_key => :subscription_id,
             :class_name => 'Subscription'
end
