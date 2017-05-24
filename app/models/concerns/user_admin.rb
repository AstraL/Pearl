module UserAdmin
	extend ActiveSupport::Concern
	included do
		rails_admin do
			navigation_icon 'icon-user'
			weight -1
			list do
				field :id do
					filterable false
				end
				field :login
				field :first_name
				field :last_name do
					visible false
				end
				field :email
				field :last_sign_in_ip do
					filterable false
				end
				field :last_sign_in_at
			end

			edit do
				field :login
				field :first_name
				field :last_name
				field :email do
					required true
				end
				field :avatar
				field :password do
					required true
				end
				field :password_confirmation do
					required true
				end
			end

			object_label_method do
				:login
			end
		end
	end
end