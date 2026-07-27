/**
 * Title: fowlowls-whatabook-installation-script.js
 * Author: The Fowl Owls
 * Date: 07/26/2026
 * Description: MongoDB shell for the WhatABook books and customers collections.
 */

// Delete the books and customer collections.
db.books.drop()
db.customers.drop()

// Drop the entire database to guarantee a completely clean slate
db.dropDatabase()

// Create the books collection using Document Validation

db.createCollection("books", {
  validator: { $jsonSchema: {
    bsonType: "object",
		properties: {
			bookId: {
				bsonType: "string"
			},
			title: {
				bsonType: "string"
			},
			author: {
				bsonType: "string"
			},
			genre: {
				bsonType: "string"
			},
			description: {
				bsonType: "string"
			},
			price: {
				bsonType: ["double", "int"]
			}
		}
  }}
})

// Create the customer collection using Document Validation
db.createCollection("customers", {
	validator: { $jsonSchema: {
		bsonType: "object",
		properties: {
			customerId: {
				bsonType: "string"
			},
			firstName: {
				bsonType: "string"
			},
			lastName: {
				bsonType: "string"
			},
			email: {
				bsonType: "string"
			},
			wishlist: {
				bsonType: "array"
			}
		}
	}}
})

// Books

nightCircus = {
	"title": "The Night Circus",
	"author": "Erin Morgenstern",
	"genre": "Fantasy",
	"bookId": "B1001", 
	"description": "A magical competition between two illusionists unfolds within a mysterious circus that only opens at night. ",
	"price": 18.40
}

cleanCode = {
	"title": "Clean Code",
	"author": "Robert C. Martin",
	"genre": "Technology",
	"bookId": "B1002",
	"description": "A guide to writing clean, maintainable software.",
	"price": 60.00
}

theHobbit = {
	"title": "The Hobbit",
	"author": "J.R.R. Tolkien",
	"genre": "Fantasy",
	"bookId": "B1003",
	"description": "A hobbit begins an unexpected adventure across Middle-earth.",
	"price": 30.00
}

atomicHabits = {
	"title": "Atomic Habits",
	"author": "James Clear",
	"genre": "Self-Development",
	"bookId": "B1004",
	"description": "A guide for building better habits through small changes.",
	"price": 14.99
}

the48LawsOfPower = {
	"title": "The 48 Laws of Power",
	"author": "Robert Greene",
	"genre": "Self-Development",
	"bookId": "B1005",
	"description": "A study of strategies for understanding power, influence, and human behavior.",
	"price": 14.99
}

artOfSeduction = {
	"title": "The Art of Seduction",
	"author": "Robert Greene",
	"genre": "Self-Development",
	"bookId": "B1006",
	"description": "An exploration of persuasion, attraction, and social influence strategies.",
	"price": 14.99
}

the33StrategiesOfWar = {
	"title": "The 33 Strategies of War",
	"author": "Robert Greene",
	"genre": "Strategy",
	"bookId": "B1007",
	"description": "A guide to strategic thinking based on historical military and leadership examples.",
	"price": 19.99
}

the50thLaw = {
	"title": "The 50th Law",
	"author": "Robert Greene",
	"genre": "Self-Development",
	"bookId": "B1008", 
	"description": "It argues that the greatest limit to success is internal fear, not external obstacles.",
	"price": 26.99
}

mastery = {
	"title": "Mastery",
	"author": "Robert Greene",
	"genre": "Self-Development",
	"bookId": "B1009",
	"description": "A guide to achieving excellence through learning, practice, and discipline.",
	"price": 24.99
}

lawsOfHumanNature = {
	"title": "The Laws of Human Nature",
	"author": "Robert Greene",
	"genre": "Psychology",
	"bookId": "B1010",
	"description": "An exploration of human behavior, motivations, emotions, and social interactions.",
	"price": 19.99
}

theDailyLaws = {
	"title": "The Daily Laws",
	"author": "Robert Greene",
	"genre": "Self-Development",
	"bookId": "B1011",
	"description": "365 daily lessons covering power, strategy, human nature, and personal growth.",
	"price": 24.99
}

// Inserting all the books documents.
db.books.insertOne(nightCircus)
db.books.insertOne(cleanCode)
db.books.insertOne(theHobbit)
db.books.insertOne(atomicHabits)
db.books.insertOne(the48LawsOfPower)
db.books.insertOne(artOfSeduction)
db.books.insertOne(the33StrategiesOfWar)
db.books.insertOne(the50thLaw)
db.books.insertOne(mastery)
db.books.insertOne(lawsOfHumanNature)
db.books.insertOne(theDailyLaws)

// List of customers

linda = {
	"customerId": "C2001",
	"firstName": "Linda",
	"lastName": "Hargrove",
	"email": "lhargrove@gmail.com",
	"wishlist": [
		"B1003",
		"B1006"
	]
}

marcus = {
	"customerId": "C2002",
	"firstName": "Marcus",
	"lastName": "Chen",
	"email": "mchen@gmail.com",
	"wishlist": [
		"B1001",
		"B1007",
		"B1005"
	]
}

darwin = {
	"customerId": "C2003",
	"firstName": "Darwin",
	"lastName": "Pena Cabrera",
	"email": "dpenacabrera@gmail.com",
	"wishlist": [
		"B1010",
		"B1011",
		"B1005",
		"B1006"
	]
}

// Inserting customer documents
db.customers.insertOne(linda)
db.customers.insertOne(marcus)
db.customers.insertOne(darwin)