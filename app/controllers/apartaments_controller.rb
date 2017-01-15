class ApartamentsController < ApplicationController

	def show
		@ap = Apartament.find(params[:id])
	end
end
