class User < ActiveRecord::Base
  # t.string   "first_name"
  # t.string   "last_name"
  # t.datetime "created_at"
  # t.datetime "updated_at"
  # t.string   "email",                  default: "", null: false
  # t.string   "encrypted_password",     default: "", null: false
  # t.string   "reset_password_token"
  # t.datetime "reset_password_sent_at"
  # t.datetime "remember_created_at"
  # t.string   "confirmation_token"
  # t.datetime "confirmed_at"
  # t.datetime "confirmation_sent_at"
  # t.string   "unconfirmed_email"
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  has_many :user_subscriptions, 
           :primary_key => :id,
           :foreign_key => :user_id,
           :class_name => 'UserSubscription',
           :dependent => :destroy
         
  has_many :subscriptions, :through => :user_subscriptions, :source => :subscription
end
