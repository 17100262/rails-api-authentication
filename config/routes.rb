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
    # resources :users
    # resources users 
    get :profile,controller: 'users'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
