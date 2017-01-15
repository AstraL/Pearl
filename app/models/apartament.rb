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
#  house_id      :integer
#

class Apartament < ActiveRecord::Base

	belongs_to :house

	mount_uploader :image, ApartamentUploader
end
