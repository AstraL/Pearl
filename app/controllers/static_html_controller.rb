class StaticHtmlController < ApplicationController

	def home
	end

	def contacts
		@feedback = Feedback.new
	end
end
