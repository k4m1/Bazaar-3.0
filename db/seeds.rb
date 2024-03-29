# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CARD_LIMIT = 1000

if Card.count != CARD_LIMIT

cards_json = JSON.parse(File.read(Rails.root.join('db', 'scryfall-oracle-cards.json')))
# debugger
# 

card_cols = Card.column_names.reject {|ele| ele == 'id' || ele == 'created_at' || ele == 'updated_at'}
# debugger
# data = JSON.parse(File.read("../public/sample_seeds.rb"))
# data = JSON.parse(File.read(Rails.root + "public/sample_seeds.js"))
# debugger
cards_json.each do |card_datum|
    # counter = 1
    # debugger
    if card_datum['tcgplayer_id'].nil?
        next
    end
    card = Card.new
    # card.id = counter
    # debugger

    card_cols.each do |key|

        if key == 'image_uris'
            # debugger
            if card_datum[key]
                card[key] = card_datum[key]['small']
            end

        else
            card[key] = card_datum[key]
        end
    end
    if card.image_uris
    card.save!
    else
        next
    end
    # counter += 1
    if card.id % CARD_LIMIT == 0
        p card.id
    end
    if card.id == CARD_LIMIT
        break
        # breaking for heroku limit of 10K rows
    end
end

end