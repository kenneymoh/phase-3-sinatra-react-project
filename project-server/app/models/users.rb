class User < ActiveRecord::Base
  include BCrypt
  has_many :pets


  before_save { self.email = email.downcase }
  validates :email, presence: true
  validates :password, presence: true


end
