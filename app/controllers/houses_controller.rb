class HousesController < ApplicationController
	before_action :set_house, only: :show

	def index
		@houses = House.all
	end

	def show
		@one_room = Apartament.where("rooms = '1'")
	end

	private

	def set_house
		@house = House.find(params[:id])
	end
end
