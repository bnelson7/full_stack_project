Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { formats: :json } do 

    resources :users, only: [:create, :update, :show] do
      resources :likes, only: [:destroy], defaults: { id: nil }
    end
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:show, :index, :create, :destroy, :update] do
      resources :comments, only: [:index, :create]
      resources :likes, only: [:create]
    end

    resources :comments, only: [:show, :destroy, :update] do
      resources :likes, only: [:create]
    end

    
  end

  root to: 'static_pages#root'
end
