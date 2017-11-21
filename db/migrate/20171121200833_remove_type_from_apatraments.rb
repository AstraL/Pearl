class RemoveTypeFromApatraments < ActiveRecord::Migration[5.0]
  def change
    remove_column :apartaments, :type, :string
  end
end
