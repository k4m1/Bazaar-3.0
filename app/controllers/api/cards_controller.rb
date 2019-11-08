class Api::CardsController < ApplicationController
  def index
    @cards = Card.all
    render :index
  end

  def show
    @card = Card.find_by(params[:id])
  end

  params.require(:card).permit(:rarity, :collector_number, :type_line, :printed_text, :name, :set_name, :image_uris, :flavor_text, :tcg_player_id)

end
