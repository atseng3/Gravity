class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  has_many :user_subscriptions, 
           :primary_key => :id,
           :foreign_key => :user_id,
           :class_name => 'UserSubscription'
         
  has_many :subscriptions, :through => :user_subscriptions, :source => :subscription
end
