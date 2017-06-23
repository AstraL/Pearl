class StaticHtmlController < ApplicationController

	def home
	end

	def about
	end

	def contacts
		@feedback = Feedback.new
	end

	def building

	end

	def documents

	end

	def commercial
		
	end
end
