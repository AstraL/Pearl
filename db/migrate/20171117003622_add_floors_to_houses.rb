class AddFloorsToHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :houses, :floors, :integer
  end
end
