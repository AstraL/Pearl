# == Schema Information
#
# Table name: apartaments
#
#  id            :integer          not null, primary key
#  image         :string
#  living_space  :float
#  kitchen_space :float
#  thrd_image    :string
#  total_space   :float
#  rooms         :integer
#  floor         :string
#  access        :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  section_id    :integer
#  house_id      :integer
#


class Apartament < ApplicationRecord
	include ApartamentAdmin
	belongs_to :section
	belongs_to :house

	mount_uploader :image, ApartamentUploader
end
