class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.string :site
      t.decimal :amount, :precision => 8, :scale => 2
      t.integer :duration
      
      t.timestamps
    end
  end
end
