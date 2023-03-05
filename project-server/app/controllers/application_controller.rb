class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Add your routes here
  #gets all pets in the database
  get "/pets" do
    pets = Pet.all
    pets.to_json
  end

  get "/users" do
    users = User.all
    users.to_json
  end

  # post "/signup" do
  #   #check fields are filled
  #   if params[:name].blank? || params[:email].blank? || params[:password].blank?
  #     redirect "/signup"

  #     #check if username is taken
  #   elsif user.find_by( name: params[user][:name])
  #     redirect "/signup"
  #   else
  #     User.create(params[:user])
  #   end
  #   binding.pry

  # end


  get "/logout" do
    redirect "/login"
  end

  post "/login" do
    user = User.find_by(email: params[:email], password: params[:password])
    user.to_json
    redirect "/"
  end

  post "/new_pet" do
    new_pet = Pet.create(
      name: params[:name],
      description: params[:description],
      breed: params[:breed],
      status: params[:status],
      age: params[:age],
      image: params[:image]
    )
    new_pet.to_json
  end

  get "/pets/:status" do
    pets = Pet.find_by(params[:status])
    pets.to_json
  end

  get "/pets/:name" do
    pets = Pet.find_by(params[:name])
    pets.to_json
  end

  get "/pets/:breed" do
    pets = Pet.find_by(params[:breed])
    pets.to_json
  end

  patch "/pets/:id" do
    pets = Pet.find(params[:id])
    pets.update(
      name: params[:name],
      description: params[:description],
      breed: params[:breed],
      status: params[:status],
      age: params[:age],
      image: params[:image]
    )
    pets.to_json
  end

  delete "/pets/:id" do
    pets = Pet.find(params[:id])
    pets.destroy
    pets.to_json
  end

end


