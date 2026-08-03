"""
Title: fowlowls-whatabook-console.py
Team: The Fowl Owls (Clifford Smith & Darwin Pena Cabrera)
Course: Web 335 - NoSQL Database Design and Development
Assignment: WhatABook Console Application
Description: A console application that connects to the WhatABook MongoDB
             database and allows a user to browse books, browse books by
             genre, and view a customer's wishlist by customerId.
"""

from pymongo import MongoClient

# ------------------------------------------------------------------
# CONNECTION SETTINGS
# Replace <username> and <password> with your own Atlas credentials.
# ------------------------------------------------------------------
CONNECTION_STRING = "mongodb+srv://web355_admin:s3cret@bellevueuniversity.brnh6kg.mongodb.net/"
DATABASE_NAME = "whatABookDB"


def connect_to_database():
    """Connects to Atlas and returns the whatABookDB database object."""
    client = MongoClient(CONNECTION_STRING)
    db = client[DATABASE_NAME]
    return db


def display_all_books(db):
    """Displays every book in the books collection, nicely formatted."""
    books = db.books.find().sort("title", 1)

    print("\n" + "=" * 50)
    print("ALL BOOKS")
    print("=" * 50)

    count = 0
    for book in books:
        count += 1
        print(f"\nBook ID:     {book.get('bookId')}")
        print(f"Title:       {book.get('title')}")
        print(f"Author:      {book.get('author')}")
        print(f"Genre:       {book.get('genre')}")
        print(f"Price:       ${book.get('price'):.2f}")
        print(f"Description: {book.get('description')}")
        print("-" * 50)

    if count == 0:
        print("No books found in the database.")
    else:
        print(f"\n{count} book(s) displayed.")


def display_books_by_genre(db):
    """Prompts the user to pick a genre, then displays matching books."""
    genres = db.books.distinct("genre")

    if not genres:
        print("\nNo genres found in the database.")
        return

    genres.sort()

    print("\n" + "=" * 50)
    print("BROWSE BY GENRE")
    print("=" * 50)
    for index, genre in enumerate(genres, start=1):
        print(f"{index}. {genre}")

    choice = input("\nEnter the number of the genre you'd like to browse: ").strip()

    # Basic error handling for a non-numeric or out-of-range choice
    if not choice.isdigit() or not (1 <= int(choice) <= len(genres)):
        print("Invalid selection. Please choose a valid genre number.")
        return

    selected_genre = genres[int(choice) - 1]
    books = db.books.find({"genre": selected_genre}).sort("title", 1)

    print(f"\nBooks in genre: {selected_genre}")
    print("-" * 50)

    count = 0
    for book in books:
        count += 1
        print(f"\nBook ID:     {book.get('bookId')}")
        print(f"Title:       {book.get('title')}")
        print(f"Author:      {book.get('author')}")
        print(f"Price:       ${book.get('price'):.2f}")
        print("-" * 50)

    if count == 0:
        print("No books found in that genre.")
    else:
        print(f"\n{count} book(s) displayed.")


def display_wishlist_by_customer(db):
    """
    Prompts the user for a customerId, then uses a $lookup aggregation
    to join the customer's wishlist (an array of bookId references)
    with the books collection to display full book details.
    """
    customer_id = input("\nEnter a customerId (e.g., C2001, C2002, C2003): ").strip()

    pipeline = [
        {"$match": {"customerId": customer_id}},
        {
            "$lookup": {
                "from": "books",
                "localField": "wishlist",
                "foreignField": "bookId",
                "as": "wishlistBooks"
            }
        }
    ]

    results = list(db.customers.aggregate(pipeline))

    # Error handling for an invalid/nonexistent customerId
    if not results:
        print(f"\nNo customer found with customerId '{customer_id}'. "
              f"Please double-check the ID and try again.")
        return

    customer = results[0]
    print("\n" + "=" * 50)
    print(f"WISHLIST FOR {customer.get('firstName')} {customer.get('lastName')} "
          f"({customer.get('customerId')})")
    print("=" * 50)

    wishlist_books = customer.get("wishlistBooks", [])

    if not wishlist_books:
        print("This customer's wishlist is empty.")
        return

    for book in wishlist_books:
        print(f"\nBook ID: {book.get('bookId')}")
        print(f"Title:   {book.get('title')}")
        print(f"Author:  {book.get('author')}")
        print(f"Genre:   {book.get('genre')}")
        print(f"Price:   ${book.get('price'):.2f}")
        print("-" * 50)

    print(f"\n{len(wishlist_books)} book(s) on this wishlist.")


def display_menu():
    """Prints the main menu and returns the user's choice."""
    print("\n" + "=" * 50)
    print("WHATABOOK CONSOLE APPLICATION")
    print("=" * 50)
    print("1. Display all books")
    print("2. Display books by genre")
    print("3. Display a customer's wishlist by customerId")
    print("4. Exit")
    return input("\nEnter your choice (1-4): ").strip()


def main():
    """Main program loop."""
    db = connect_to_database()
    print("Connected to the WhatABook database successfully.")

    while True:
        choice = display_menu()

        if choice == "1":
            display_all_books(db)
        elif choice == "2":
            display_books_by_genre(db)
        elif choice == "3":
            display_wishlist_by_customer(db)
        elif choice == "4":
            print("\nThanks for using WhatABook. Goodbye!")
            break
        else:
            print("\nInvalid choice. Please enter a number from 1 to 4.")


if __name__ == "__main__":
    main()
