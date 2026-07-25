/*
  Name: Darwin Pena Cabrera
  Date: 07/24/2026
  Assignment: Assignment 5.2 - Projections
  Description: MongoDB document manipulation and projections
*/

// Adding a new user to the users collection

darwin = {
    firstName: "Darwin",
    lastName: "Pena Cabrera",
    employeeId: "1013",
    email: "dpena@me.com",
    dateCreated: new Date()
}

db.users.insertOne(darwin)

// Verifying that the new user was added

db.users.find({ email: "dpena@me.com"})

// Updating Mozarts's email address

db.users.updateOne(
  { lastName: "Mozart"},
  { $set: {email: "mozart@me.com"}}
)

// verifying that Mozart's email was updated

db.users.find({ lastName: "Mozart"})

// Display all user using projections only showing firstName, lastName, and email

db.users.find(
  {},
  {
    _id: 0,
    firstName: 1,
    lastName: 1,
    email: 1
  }
)