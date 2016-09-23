Rails.application.routes.draw do

  get 'page/parkinglist'
  get 'page/getparking/:parking_id', to: 'page#getparking'


  delete 'page/deleteparking/:parking_id' => 'page#deleteparking'
  post 'page/updateparking' => 'page#updateparking'
  post 'page/createparking' => 'page#createparking'




  resources :parkings
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
