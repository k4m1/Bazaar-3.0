# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Card.count != 5000

cards_json = JSON.parse(File.read(Rails.root.join('db', 'scryfall-oracle-cards.json')))
# debugger
# 

card_cols = Card.column_names.reject {|ele| ele == 'id' || ele == 'created_at' || ele == 'updated_at'}
# debugger
# data = JSON.parse(File.read("../public/sample_seeds.rb"))
# data = JSON.parse(File.read(Rails.root + "public/sample_seeds.js"))
# debugger
cards_json.each do |card_datum|
    # debugger
    if card_datum['tcgplayer_id'].nil?
        next
    end
    card = Card.new

    card_cols.each do |key|

        if key == 'image_uris'
            card[key] = card_datum[key].to_json
        else
            card[key] = card_datum[key]
        end
    end
    card.save!
    if card.id % 100 == 0
        p card.id
    end
    if card.id == 5000
        break
        # breaking for heroku limit of 10K rows
    end
end

end