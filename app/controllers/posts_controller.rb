class PostsController < ApplicationController
	before_action :set_post, only: :show

	def create
		@post = Post.create(post_params)
		if @post.save
			redirect_to root_path, notice: "Пост создан."
		else
			redirect_to root_path, alert: "Что-то пошло не так."
		end
	end

	def destroy
	end

	def show
	end

	private

	def set_post
		@post = Post.find(params[:id])
	end

	def post_params
    	params.require(:post).permit(:title, :text, :image, :show_count, :kind)
    end
end
