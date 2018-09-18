Rails.application.routes.draw do
  
  scope 'api' do
    # devise_for :users,controller:{sessions: 'sessions'}
    # devise_for :users, controllers: { registrations: 'users/registrations' }
    resources :sessions, only: [:create] do
      collection do
        delete :destroy
      end
    end
    resources :registrations, only: [:create]
    get :user_management, controller: :admin
    resources :categories
    # resources :users
    # resources users 
    get :profile,controller: 'users'
    put :approve_user,controller: 'admin'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
