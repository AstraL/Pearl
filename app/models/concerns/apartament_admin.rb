module ApartamentAdmin
	extend ActiveSupport::Concern

	included do
		rails_admin do
			parent House
		end
	end
end