puts "🌱 Seeding pets and users..."

# Seed your database here
#user input information
User.create(name:"user11",email:"jennifer@legros.org",password:"password")
User.create(name:"user22",email:"hal@graham-kunze.co",password:"password")
User.create(name:"user33",email:"shani.daniel@hauck.org",password:"password")
User.create(name:"user44",email:"benton@cummings.biz",password:"password")
User.create(name:"user55",email:"roland@armstrong.co",password:"password")
User.create(name:"user66",email:"geri_orn@bednar.co",password:"password")


#pets input information


Pet.create(name:"Bosco",description:"white",breed:"Alaskan",status:"Not Adopted",age:4,image_url:"https://www.shutterstock.com/image-photo/hungry-funny-puppy-dog-licking-nose-1805010616")
Pet.create(name:"Simba",description:"black",breed:"American Malamute",status:"Adopted",age:6,image_url:"https://www.shutterstock.com/image-photo/cute-puppy-paws-over-white-sign-412321696")
Pet.create(name:"Puspus",description:"polka",breed:"Australian",status:"Not Adopted",age:8,image_url:"https://www.shutterstock.com/image-photo/tabby-cat-border-collie-dog-front-1934050523")
Pet.create(name:"Wee",description:"stripped",breed:"Hound",status:"Adopted",age:10,image_url:"https://www.shutterstock.com/image-photo/cute-corgi-dog-looking-laptop-glasses-1715597689")
Pet.create(name:"Paka",description:"wooly",breed:"German shepherd",status:"Not Adopted",age:12,image_url:"https://www.shutterstock.com/image-photo/amazing-portrait-young-crossbreed-dog-german-706603864")
Pet.create(name:"Ella",description:"brown",breed:"Affenpinscher",status:"Adopted",age:2,image_url:"https://www.shutterstock.com/image-photo/adorable-welsh-springer-spaniel-dog-breed-1823409425")

puts "✅ Done seeding!"
