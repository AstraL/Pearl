class AddFieldsToHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :houses, :default_floor, :string
    add_column :houses, :nodefault_floor, :string
  end

  House.create(title: 'Перша черга', address: 'вул. Козацька 1/1')
end
