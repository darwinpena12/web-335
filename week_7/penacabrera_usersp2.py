"""
Title: penacabrera_usersp2.py
Author: Darwin Pena Cabrera
Date: 07/26/2026
Description: Connects to the MongoDB web335DB database and performs CRUD operations on the users collection.
"""
# Import the MongoClient
from pymongo import MongoClient
import datetime

# Build a connection to connect to the MongoDB database

client = MongoClient("mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DB?retryWrites=true&w=majority")

# Configure a variable to access the web335DB database

db = client["web335DB"]

# Create a new user document

darwin = {
  "firstName": "Darwin",
  "lastName": "Pena Cabrera",
  "employeeId": "1015",
  "email": "darwin.penacabrera@me.edu",
  "dateCreated": datetime.datetime.utcnow()
}

# Insert the new user document into the users collection
darwin_user_id = db.users.insert_one(darwin).inserted_id

# Proving that the new user document was created successfully
print(db.users.find_one({"employeeId": "1015"}))

# Update the new users email address

db.users.update_one(
  {"employeeId": "1015"},
  {
    "$set": {
      "email": "darwin@me.edu"
    }
  }
)

# Proving that the new user's email address was updated successfully
print("\n Displaying the updated user's document:")
print(db.users.find_one({"employeeId": "1015"}))

# Delete the new user document from the users collection
result = db.users.delete_one({"employeeId": "1015"})

print("\n Delete user document with employeeId 1015:")
print(result)

# Proving that the new user document was deleted successfully
print("\n Proving that the new user document was deleted successfully:")
print(db.users.find_one({"employeeId": "1015"}))