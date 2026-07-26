/*
  Name: Darwin Pena Cabrera
  Date: 07/25/2026
  Assignment: Assignment 6.2 - Aggregate Queries
  Description: Aggregate Queries
*/

// Display all the students

db.students.find()

// Add a new student 
darwin = {
  firstName: "Darwin",
  lastName: "Pena Cabrera",
  studentId: "s1019",
  houseId: "h1007"
}

db.students.insertOne(darwin)

// Verify that the new student was added

db.students.find({ studentId: "s1019" })

// Updating the new student's last name

db.students.updateOne(
  { studentId: "s1019"},
  {
    $set: {
      lastName: "Cabrera"
    }
  }
)

// Verify that the last name of the student was updated

db.students.find({ studentId: "s1019"})

// Delete the student that was previously added

db.students.deleteOne({ studentId: "s1019"})

// Verify that the student was deleted

db.students.find({ studentId: "s1019"})

// Show all the students by house 

db.houses.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "Students"
    }
  }
])

// Show all the students from Gryffindor

db.houses.aggregate([
  {
    $match: {
      founder: "Godric Gryffindor"
    }
  },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "Students"
    }
  }
])

// Show all students in the house that have the eagle mascot

db.houses.aggregate([
  {
    $match: {
      mascot: "Eagle"
    }
  },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "Students"
    }
  }
])