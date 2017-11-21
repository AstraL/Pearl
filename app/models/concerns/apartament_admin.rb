module ApartamentAdmin
	extend ActiveSupport::Concern

	included do
			rails_admin do
					parent Section
			end
	end
end