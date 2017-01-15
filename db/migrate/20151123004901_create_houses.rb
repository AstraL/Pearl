class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.string :title
      t.string :address
      t.string :image

      t.timestamps null: false
    end
  end
end
