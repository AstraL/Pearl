class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :text
      t.string :image
      t.integer :show_count
      t.string :kind

      t.timestamps null: false
    end
  end
end
