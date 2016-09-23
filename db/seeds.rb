# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

parkingPath = "#{Rails.root}/db/parkings.json"
parkingJson = JSON.parse(File.read(parkingPath))

parkingJson.each do |park|
  parking = Parking.new(park)
  parking.create_or_update_plus()

end
