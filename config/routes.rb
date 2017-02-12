Rails.application.routes.draw do
  devise_for :users
  # root is set in config/high_voltage
  resources :topics#index
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
