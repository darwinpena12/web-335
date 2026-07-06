/*
  Name: Darwin Pena Cabrera
  Date: 07/05/2026
  Assignment: Exercise 4.3 - MongoDB Shell
  Description: MongoDB queries to find users 
*/


// Display all users in the collections
db.users.find()

// Display the user with the email address jbach@me.com
db.users.find({email: "jbach@me.com" })

// Display the user with the last name Mozart
db.users.find({ lastName: "Mozart" })

// Display the user with the first name Richard
db.users.find({ firstName : "Richard" })

// Display the user with employeeId 1010
db.users.find({ employeeId: "1010" })