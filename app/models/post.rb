# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string
#  text       :text
#  image      :string
#  show_count :integer
#  kind       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

	TYPE = ["news", "offers", "blog"]

	mount_uploader :image, PostUploader
end
