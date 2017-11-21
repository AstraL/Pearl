# == Schema Information
#
# Table name: houses
#
#  id              :integer          not null, primary key
#  title           :string
#  address         :string
#  image           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  default_floor   :string
#  nodefault_floor :string
#  active          :boolean          default(FALSE)
#  slug            :string
#  points          :string
#


class House < ApplicationRecord
	include HouseAdmin
	extend FriendlyId

	has_many :sections
	has_many :apartaments, through: :sections

	friendly_id :slug, use: :slugged
	mount_uploader :image, HouseUploader
end
