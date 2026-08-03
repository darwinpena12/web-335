/**
 * Title: fowlowls-whatabook.js
 * Team: The Fowl Owls (Clifford Smith & Darwin Pena Cabrera)
 * Course: Web 335 - NoSQL Database Design and Development
 * Description: WhatABook MongoDB queries - full set of 7 required queries
 *              demonstrating book browsing/search and wishlist management.
 * Date: 07/31/2026
 */

// 1. Display a list of all books.
db.books.find();

// 2. Display a list of books by genre.
// Example with Fantasy as the genre
db.books.find({
  genre: "Fantasy"
});

// 3. Display a list of books by author.
// Example with Erin Morgenstern as an author
db.books.find({
  author: "Erin Morgenstern"
});

// 4. Display a book by bookId.
// Example with a book with bookId B1001
db.books.findOne({
  bookId: "B1001"
})

// 5. Display the wishlist by customerId.
// Example with customer C2003
db.customers.find(
  { customerId: "C2003" },
  {
    _id: 0,
    customerId: 1,
    firstName: 1,
    lastName: 1,
    wishlist: 1
  }
)

// 6. Add a book to a customer's wishlist.
// Example with customer C2003 and bookId B1007
db.customers.updateOne(
  { customerId: "C2003" },
  {
    $push: { 
      wishlist: "B1007"
    }
  }
)

// 7. Remove a book from a customer's wishlist.
// Example with customer C2003 and bookId B1007
db.customers.updateOne(
  { customerId: "C2003" },
  {
    $pull: {
      wishlist: "B1007"
    }
  }
)