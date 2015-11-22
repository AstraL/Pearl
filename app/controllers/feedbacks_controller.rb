class FeedbacksController < ApplicationController
	def create
		@feedback = Feedback.create(feedback_params)
		if @feedback.save
			redirect_to :back, notice: "Сообщение отправлено"
		else
			render template: "static_html/contacts"
		end
	end

	private

	def feedback_params
		params.require(:feedback).permit(:name, :email, :phone, :message)
	end
end
