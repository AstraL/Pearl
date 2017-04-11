class User < ApplicationRecord
    # :confirmable, :lockable, :timeoutable and :omniauthable, :recoverable
    devise :database_authenticatable, :registerable, :rememberable,  :validatable, :trackable

    include UserAdmin # config for user in admin panel

	validates_presence_of :login, :first_name
end
