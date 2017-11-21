class ChangeDisabledInHouses < ActiveRecord::Migration[5.0]
  def change
      rename_column :houses, :disabled, :active
  end
end
