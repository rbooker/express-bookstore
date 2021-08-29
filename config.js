/** Common config for bookstore. */


let DB_URI = 'books';

if (process.env.NODE_ENV === "test") {
  DB_URI = 'books-test';
} else {
  DB_URI = 'books';
}


module.exports = { DB_URI };