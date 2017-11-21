module HousesHelper

  def disabled_check(house)
    if house.disabled
      'house-link disabled card card-raised card-nav-tabs'
    else
      'house-link card card-raised card-nav-tabs'
    end
  end

    def house_type(house)
      if params[:type].present?
        house_path(house, type: 'commercial')
      else
        house_path(house)
      end
    end

    def self.disabled?
      if self.active
        false
      else
        true
      end
    end
end
