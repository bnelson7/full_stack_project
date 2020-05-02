Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  namespace :api, defaults: { formats: :json } do 
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:show, :index, :create, :destroy, :update] do
      resources :comments, only: [:index, :create, :destroy, :update]
    end
  end

  root to: 'static_pages#root'
end
