"""
Title: penacabrera_usersp1.py
Author: Darwin Pena Cabrera
Date: 07/25/2026
Description: Connects to the MongoDB web335DB database and performs various operations
"""

# Import The MongoClient
from pymongo import MongoClient

# Build a connection to connect to the MongoDB database
client = MongoClient("mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DB?retryWrites=true&w=majority")

# Connect to the web335DB database
db = client["web335DB"]

# Display all users in the users collection
print("All users in the users collection:")
for user in db.users.find():
  print(user)

# Display user with employeeId 1011
print("User with employeeId 1011:")

print(db.users.find_one({"employeeId": "1011"}))

# Display user with Last Name Mozart
print("User with last name Mozart:")

print(db.users.find_one({"lastName": "Mozart"}))