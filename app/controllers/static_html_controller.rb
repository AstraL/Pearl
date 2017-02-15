class StaticHtmlController < ApplicationController

	def home
	end

	def about
	end

	def contacts
		@feedback = Feedback.new
	end
end
