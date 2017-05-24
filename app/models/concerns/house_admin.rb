module HouseAdmin
	extend ActiveSupport::Concern

	included do
		rails_admin do
			navigation_label 'Объект'
		end
	end
end