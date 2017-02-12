module NavLinkHelper
  def nav_link(link_text, link_path)
    class_name = if current_page?(link_path) == true || current_page?('/') && link_path == '/home'
                   'active'
                 else
                   ''
                 end

    content_tag(:li, :class => class_name) do
      link_to link_text, link_path
    end
  end
end
