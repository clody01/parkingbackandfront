require 'roar/json'

module ParkingRepresenter
  include Roar::JSON
  property :id
  property :lat
  property :lng
  property :name
  property :address
  property :available
  property :slug
  property :has_camera
  property :has_watchman
  property :zip_code
  property :district
  property :city
  property :main_picture
  property :price_month

end
