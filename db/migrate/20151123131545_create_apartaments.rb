class CreateApartaments < ActiveRecord::Migration
  def change
    create_table :apartaments do |t|
      t.string :image
      t.float :living_space
      t.float :kitchen_space
      t.string :thrd_image
      t.float :total_space
      t.integer :rooms
      t.string :floor
      t.integer :access

      t.timestamps null: false
    end
  end
end
