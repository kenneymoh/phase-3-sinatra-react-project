class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    # creating columns in user table
    create_table :users do |w|
      t.string :name
      t.string :email
      t.string :password
    end

  end
end




#name email password
