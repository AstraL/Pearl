class BlogController < ApplicationController

	def index
		@posts = Post.where("kind = 'blog'")
	end
end
