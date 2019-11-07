class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name, null: false
      t.string :set_id, null: false
      t.string :rarity, null: false
      t.integer :set_number, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :cards, :name
  end
end
