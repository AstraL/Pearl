class AddSlugToHouse < ActiveRecord::Migration[5.0]
  def change
    add_column :houses, :slug, :string
  end
end
