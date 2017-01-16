module StaticHtmlHelper



	def overlay(icon)
		content_tag(:div, (fa_icon icon), class: 'overlay')
	end

	def img_link(img, link)
		link_to link do
			image_tag img
			overlay("search-plus")
		end
	end
end
