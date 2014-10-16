class AddSiteLink < ActiveRecord::Migration
  def change
    add_column :subscriptions, :site_link, :string
  end
end
