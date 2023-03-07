class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    # creating columns in user table
    create_table :users do |w|
      w.string :name
      w.string :email
      w.string :password

    end

  end
end




#name email password
