class SectionsController < ApplicationController

		def show
				@section = Section.find(params[:id])
				@ap = @section.apartaments.first
		end
end
