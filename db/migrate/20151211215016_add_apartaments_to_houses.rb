class AddApartamentsToHouses < ActiveRecord::Migration
  def change
    add_column :apartaments, :house_id, :integer
  end
end
