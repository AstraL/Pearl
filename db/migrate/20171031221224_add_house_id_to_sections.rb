class AddHouseIdToSections < ActiveRecord::Migration[5.0]
  def change
    add_column :sections, :house_id, :integer
    rename_column :apartaments, :house_id, :section_id
  end
end
