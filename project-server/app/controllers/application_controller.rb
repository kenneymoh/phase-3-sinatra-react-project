class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Add your routes here
  get "/pets" do
    pets = Pet.all
    pets.to_json
  end

  get "/users" do
    users = User.all
    users.to_json
  end

  post "/login" do
    user = User.find_by(email: params[:email], password: params[:password])
    user.to_json
  end

  post "/new_pet" do
    new_pet = Pet.create(
      name: params[:name],
      description: params[:description],
      breed: params[:breed],
      status: params[:status],
      age: params[:age],
      image_url: params[:image_url]

    )
  end

end


