# == Schema Information
#
# Table name: feedbacks
#
#  id         :integer          not null, primary key
#  name       :string
#  email      :string
#  phone      :string
#  message    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feedback < ApplicationRecord

	validates_presence_of :name, :email, :phone, :message
end
