class NewsController < ApplicationController

	def index
		@news = Post.where("kind = 'news'")
	end

	def show
	end
end
