class Parking < ApplicationRecord

=begin

  def self.create_or_update(parking)
    if parking.id == nil
      if parking.address != ""
        latitudeLongitude =Geokit::Geocoders::GoogleGeocoder.geocode parking.address
        parking.lat = latitudeLongitude.ll.split(",").map(&:to_f)[0]
        parking.lng = latitudeLongitude.ll.split(",").map(&:to_f)[1]
      end
      if parking.zip_code != ""
        parking.district =parking.zip_code[-2, 2]
      end
      if parking.name != ""
        parking.slug =parking.name.downcase.tr(' ', '-').gsub("-de-", "-")
      end

      if Parking.where("slug =? ",parking.slug).first ==nil
        parking.save
      end
    else
      parking.save if Parking.where("id =?",parking.id).first !=nil
    end
  end
=end

  def create_or_update_plus()
    if self.id == "nill"
      if self.address != ""
        latitudeLongitude =Geokit::Geocoders::GoogleGeocoder.geocode self.address
        self.lat = latitudeLongitude.ll.split(",").map(&:to_f)[0]
        self.lng = latitudeLongitude.ll.split(",").map(&:to_f)[1]
      end
      if self.zip_code != ""
        self.district =self.zip_code[-2, 2]
      end
      if self.name != ""
        self.slug =self.name.downcase.tr(' ', '-').gsub("-de-", "-")
      end

      if Parking.where("slug =? ",self.slug).first ==nil
        self.save
      end
    elsif self.id != "nill"
      self.save # if Parking.where("id =?",self.id).first !=nil
    end
  end


  def updateData()
    if self.address != ""
      latitudeLongitude =Geokit::Geocoders::GoogleGeocoder.geocode self.address
      self.lat = latitudeLongitude.ll.split(",").map(&:to_f)[0]
      self.lng = latitudeLongitude.ll.split(",").map(&:to_f)[1]
    end
    if self.zip_code != ""
      self.district =self.zip_code[-2, 2]
    end
    if self.name != ""
      self.slug =self.name.downcase.tr(' ', '-').gsub("-de-", "-")
    end
  end
end
