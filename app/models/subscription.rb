class Subscription < ActiveRecord::Base
  has_many :user_subscriptions, 
           :primary_key => :id,
           :foreign_key => :subscription_id,
           :class_name => 'UserSubscription'
         
  has_many :users, :through => :user_subscriptions, :source => :user
end
