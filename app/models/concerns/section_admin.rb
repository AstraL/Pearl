module SectionAdmin
	extend ActiveSupport::Concern

	included do
		rails_admin do
			parent House

			list do
				field :id do
					sort_reverse false
					visible false
				end
				field :index do
					pretty_value do
						'Секция ' + value.to_s
					end
					sortable false
				end
				field :house
				field :points do
					filterable false
				end
				field :slug do
					visible false
				end
			end

			object_label_method do
				:index
			end
		end
	end
end