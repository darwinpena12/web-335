/**
 * Title: fowlowls-whatabook-Assignment-8.2.js
 * Author: The Fowl Owls
 * Description: WhatABook MongoDB queries
 */

// Display a list of all books.
db.books.find();

// Display a list of books by genre.
// Example with Fantasy as the genre

db.books.find({
  genre: "Fantasy"
});

// Display a list of books by author.
// Example with Erin Morgenstern as an author
db.books.find({
  author: "Erin Morgenstern"
});

// Display a book by bookId.
//Example with a book with bookId B1001

db.books.findOne({
  bookId: "B1001"
})