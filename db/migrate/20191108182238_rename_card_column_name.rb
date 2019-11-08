class RenameCardColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :cards, :tcg_player_id, :tcgplayer_id
    rename_column :cards, :printed_text, :oracle_text
  end
end
