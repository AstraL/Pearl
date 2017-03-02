# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(login: "admin", email: "sawyer126@gmail.com", password: "329687", password_confirmation: "329687")

House.create(title: "Перша черга", address: "вул. Козацька 1/1", image: "building.jpg")
House.create(title: "Перша черга", address: "вул. Козацька 1/2", image: "building.jpg")
House.create(title: "Перша черга", address: "вул. Козацька 1/3", image: "building.jpg")
House.create(title: "Перша черга", address: "вул. Козацька 1/4", image: "building.jpg")
House.create(title: "Перша черга", address: "вул. Козацька 1/5", image: "building.jpg")
House.create(title: "Перша черга", address: "вул. Козацька 1/6", image: "building.jpg")
House.create(title: "Перша черга", address: "вул. Козацька 1/7", image: "building.jpg")
House.create(title: "Перша черга", address: "вул. Козацька 1/8", image: "building.jpg")
