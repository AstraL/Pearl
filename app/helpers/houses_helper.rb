module HousesHelper

  def disabled_check(house)
    if house.disabled
      'house-link disabled card card-raised card-nav-tabs'
    else
      'house-link card card-raised card-nav-tabs'
    end
  end
end
