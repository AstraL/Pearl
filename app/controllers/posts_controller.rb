class PostsController < ApplicationController

	def new
		@post = Post.new
	end

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

	private

	def post_params
    	params.require(:post).permit(:title, :text, :image, :show_count, :kind)
    end
end
