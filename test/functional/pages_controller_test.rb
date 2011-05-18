require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get whatWeDo" do
    get :whatWeDo
    assert_response :success
  end

  test "should get whoWeAre" do
    get :whoWeAre
    assert_response :success
  end

end
