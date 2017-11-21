# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  login               :string           default(""), not null
#  first_name          :string           default(""), not null
#  last_name           :string           default(""), not null
#  avatar              :string           default(""), not null
#  email               :string           default(""), not null
#  encrypted_password  :string           default(""), not null
#  remember_created_at :datetime
#  sign_in_count       :integer          default(0), not null
#  current_sign_in_at  :datetime
#  last_sign_in_at     :datetime
#  current_sign_in_ip  :string
#  last_sign_in_ip     :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class User < ApplicationRecord
    # :confirmable, :lockable, :timeoutable and :omniauthable, :recoverable
    devise :database_authenticatable, :registerable, :rememberable,  :validatable, :trackable

    include UserAdmin # config for user in admin panel

	validates_presence_of :login, :first_name
end
