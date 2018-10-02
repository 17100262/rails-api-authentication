class AddFieldsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :biography, :text
    add_column :users, :location, :string
    add_column :users,:website,:string
  end
end
