class AddDisabledToHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :houses, :disabled, :boolean, default: false

    h_disabled = House.create(title: 'Друга черга', address: 'вул. Козацька 1/2', disabled: true)
    h_disabled.save
  end
end
