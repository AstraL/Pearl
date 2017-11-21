# == Schema Information
#
# Table name: sections
#
#  id         :integer          not null, primary key
#  index      :integer
#  points     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  house_id   :integer
#

class Section < ApplicationRecord
	include SectionAdmin

	belongs_to :house
	has_many :apartaments
end
