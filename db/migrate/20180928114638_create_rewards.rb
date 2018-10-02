class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.references :campaign, foreign_key: true
      t.string :title
      t.integer :pledge_amount
      t.text :description
      t.date :estimated_delivery

      t.timestamps
    end
  end
end
