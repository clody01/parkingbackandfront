class PageController < ApplicationController
  skip_before_action :verify_authenticity_token

  def parkinglist
    @parkinglist = Parking.all
    render :json => @parkinglist
  end

  def updateparking
    params[:parking]=request.raw_post
    if params[:parking] != nil
      parkingJson = JSON.parse(params[:parking])
      parking = Parking.new(parkingJson)
      parking.updateData
      Parking.where("id=?",parking.id).update_all(parking.attributes)
    end
  end

  def createparking
    params[:parking]=request.raw_post
    if params[:parking]  != nil
      parkingJson = JSON.parse(params[:parking])
      parking = Parking.new(parkingJson)
      parking.updateData
      parking.save if Parking.where("slug=?",parking.slug).first == nil
    end
    parking.to_json
  end

  def deleteparking
    if params[:parking_id]  != ""
      parking =  Parking.where("id =?",params[:parking_id].to_i).first
      parking.delete if  parking !=nil
    end

  end

  def getparking
    parking = nil
    if params[:parking_id]  != ""
      parking= Parking.where("id =?",params[:parking_id]).first
    end
    parking
    render :json => parking
  end


end
