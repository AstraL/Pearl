module ApplicationHelper

	def full_title(page_title)
		base_title = 'ЖК "Перлина Дніпра"'
		if page_title.empty?
			base_title
		else
			"#{base_title} - #{page_title}"
		end
	end

	def tel_to(text)
		groups = text.to_s.scan(/(?:^\+)?\d+/)
		link_to text, "tel:#{groups.join '-'}"
	end

	def social_line_enable
		action_name == 'home'
	end

	def gmaps_call(callback=nil)
		gmapsSrc = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDktZsyT5IXK4B1RELdoNTkwBGADJtWiJ4&libraries=places'
		if callback.nil?
			combine = gmapsSrc
		else
			callbackAdd = '&callback=' + callback
			combine = gmapsSrc + callbackAdd
		end

		content_tag(:script, '', src: combine)
	end
end
