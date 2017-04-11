# == Schema Information
#
# Table name: houses
#
#  id         :integer          not null, primary key
#  title      :string
#  address    :string
#  image      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class House < ApplicationRecord
	include HouseAdmin
	has_many :apartaments

	mount_uploader :image, HouseUploader
end
