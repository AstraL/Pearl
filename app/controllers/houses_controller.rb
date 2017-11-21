class HousesController < ApplicationController
	before_action :set_house, only: :show

	def index
		@houses = House.all
	end

	private

	def set_house
		@house = House.friendly.find(params[:id])
	end
end
