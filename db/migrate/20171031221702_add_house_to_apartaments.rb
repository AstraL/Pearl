class AddHouseToApartaments < ActiveRecord::Migration[5.0]
  def change
    add_column :apartaments, :house_id, :integer
  end
end
