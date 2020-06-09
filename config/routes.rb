Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { formats: :json } do 

    resource :user, only: [:create] 
    resources :users, only: [:update, :show] do
      resources :channels, only: :create
    end
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:show, :index, :create, :destroy, :update] do
      resources :comments, only: [:index, :create]
      resources :likes, only: [:create]
    end

    resources :comments, only: [:show, :destroy, :update] do
      resources :likes, only: [:create]
    end

    resources :likes, only: [:destroy]
    
    resources :channels, only: [:show, :destroy, :update] do
      resources :subscriptions, only: :create
    end

    resources :subscriptions, only: :destroy
  end


  root to: 'static_pages#root'
end
