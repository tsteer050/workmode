Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :channels, only: [:show, :index, :create]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:show, :index, :create, :destroy]
    resources :memberships, only: [:show, :index, :create, :destroy]
  end

  root to: 'static_pages#root'
  mount ActionCable.server => '/cable'
end
