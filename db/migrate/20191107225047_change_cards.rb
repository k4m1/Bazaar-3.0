class ChangeCards < ActiveRecord::Migration[5.2]
  def change
    change_table :cards do |t|
      remove_column :cards, :name
      remove_column :cards, :set_id
      remove_column :cards, :rarity
      remove_column :cards, :set_number
      remove_column :cards, :description

      add_column :cards, :rarity, :string
      add_column :cards, :collector_number, :integer
      add_column :cards, :type_line, :string
      add_column :cards, :printed_text, :string
      add_column :cards, :name, :string
      add_column :cards, :set_name, :string
      add_column :cards, :image_uris, :string
      add_column :cards, :flavor_text, :string
      add_column :cards, :tcg_player_id, :integer
    end
  end
end
