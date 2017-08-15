class AddDisabledToHouses < ActiveRecord::Migration[5.0]
  def change
    add_column :houses, :disabled, :boolean, default: false
  end
end
