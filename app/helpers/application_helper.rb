module ApplicationHelper

	def tel_to(text)
		groups = text.to_s.scan(/(?:^\+)?\d+/)
		link_to text, "tel:#{groups.join '-'}"
	end

	def social_line_enable
		action_name == 'home'
	end
end
