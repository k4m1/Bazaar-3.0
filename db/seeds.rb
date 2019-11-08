# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


card_cols = Card.column_names

data = JSON.parse(File.read("sample_seeds.rb"))

data.each do |card_datum|
    card = Card.new
    card_datum.keys.each do |key|
        card_cols.each do |col|
            card.send("#{col}=", card_data[key])
        end
    end
    card.save!
end