module PostAdmin
	extend ActiveSupport::Concern

	included do
		rails_admin do
			navigation_label 'Блог'
		end
	end
end
