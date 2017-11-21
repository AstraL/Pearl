module HouseAdmin
	extend ActiveSupport::Concern

	included do
			rails_admin do
					navigation_label 'Объект'

					list do
							field :title
							field :address
							field :active
							field :sections
					end

					grid do
							thumbnail_method do
									:image
							end
					end
			end
	end
end