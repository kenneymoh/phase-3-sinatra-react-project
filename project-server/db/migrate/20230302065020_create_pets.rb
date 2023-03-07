class CreatePets < ActiveRecord::Migration[6.1]
  def change
    #creating columns for pets
    create_table :pets do |t|
      t.string :name
      t.string :description
      t.string :breed
      t.string :status
      t.integer :age
      t.string :image_url

    end
  end
end



#name description breed photo contact age status
