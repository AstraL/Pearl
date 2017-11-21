class AddTypeToApartaments < ActiveRecord::Migration[5.0]
  def change
    add_column :apartaments, :type, :string
  end
end
