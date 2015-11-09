class OffersController < ApplicationController

	def index
		@offers = Post.where("kind = 'offers'")
	end
end
