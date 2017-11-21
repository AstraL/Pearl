class AddPointsToHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :houses, :points, :string
  end
end
