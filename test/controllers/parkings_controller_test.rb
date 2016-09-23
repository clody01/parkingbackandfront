require 'test_helper'

class ParkingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @parking = parkings(:one)
  end

  test "should get index" do
    get parkings_url
    assert_response :success
  end

  test "should get new" do
    get new_parking_url
    assert_response :success
  end

  test "should create parking" do
    assert_difference('Parking.count') do
      post parkings_url, params: { parking: { : @parking., address: @parking.address, available: @parking.available, city: @parking.city, district: @parking.district, has_camera: @parking.has_camera, has_watchman: @parking.has_watchman, id: @parking.id, lat: @parking.lat, lng: @parking.lng, main_picture: @parking.main_picture, name: @parking.name, price_month: @parking.price_month, slug: @parking.slug, zip_code: @parking.zip_code } }
    end

    assert_redirected_to parking_url(Parking.last)
  end

  test "should show parking" do
    get parking_url(@parking)
    assert_response :success
  end

  test "should get edit" do
    get edit_parking_url(@parking)
    assert_response :success
  end

  test "should update parking" do
    patch parking_url(@parking), params: { parking: { : @parking., address: @parking.address, available: @parking.available, city: @parking.city, district: @parking.district, has_camera: @parking.has_camera, has_watchman: @parking.has_watchman, id: @parking.id, lat: @parking.lat, lng: @parking.lng, main_picture: @parking.main_picture, name: @parking.name, price_month: @parking.price_month, slug: @parking.slug, zip_code: @parking.zip_code } }
    assert_redirected_to parking_url(@parking)
  end

  test "should destroy parking" do
    assert_difference('Parking.count', -1) do
      delete parking_url(@parking)
    end

    assert_redirected_to parkings_url
  end
end
