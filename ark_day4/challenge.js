const books = require("./books.json");
// Price Of Books Function
function priceOfBook(bookName) { 
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === bookName) {
        return books[i].price.toFixed(2);
    }
  }
}
console.log(priceOfBook("To Kill a Mockingbird"));


// Affordable Books Function
const books = require("./books.json");
function affordableBooks(budget) { 
  let affordableBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].price <= budget) {
      affordableBooks.push(books[i].title);
    }
  }
return affordableBooks;
}
console.log(affordableBooks(12.5));


// Find Book By Genre Function
const books = require("./books.json");
function findBookByGenre(genre) { 
  let booksByGenre = [];
  for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].genres.length; j++){
          if (books[i].genres[j] === genre){
              booksByGenre.push(books[i].title);
          }
      }
  }
  return booksByGenre;
}
console.log(findBookByGenre("Fiction"));


// Group By Genre Function
const books = require("./books.json");
function groupByGenre() {
  let groupedBooks = {};
  for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].genres.length; j++) {
        // Get the current genre
        const genre = books[i].genres[j];
        // If the genre is not a key in groupedBooks, create an empty array for it
        if (groupedBooks[genre]==null) {
          groupedBooks[genre] = [];
        }
        // Add the title of the current book to the corresponding genre's array
        groupedBooks[genre].push(books[i].title);
      }
  }
  return groupedBooks;
}
console.log(groupByGenre());


// Sort By Price Function
const books = require("./books.json");
function sortByPrice() {
  // Insertion sort algorithm to sort books by price in ascending order
  for (let i = 1; i < books.length; i++) {
    const currentBook = books[i];
    let j = i - 1;
    // Move elements greater than currentBook to the right
    while (j >= 0 && books[j].price > currentBook.price) {
      books[j + 1] = books[j];
      j--;
    }
    // Insert the currentBook in its correct position
    books[j + 1] = currentBook;
  }
  return books;
}

const sortedBooks = sortByPrice();
console.log(sortedBooks);




(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();
