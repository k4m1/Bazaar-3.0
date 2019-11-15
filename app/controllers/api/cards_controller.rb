class Api::CardsController < ApplicationController
  def index

    if params[:limit]
      # debugger

      @cards = Card.offset(rand(980)).limit(params[:limit])
  else

    @cards = Card.all
  end
    render :index

  end

  def show
    @card = Card.find_by(id: params[:id])
  end

  # params.require(:card).permit(:rarity, :collector_number, :type_line, :printed_text, :name, :set_name, :image_uris, :flavor_text, :tcgplayer_id)

end
