

function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}


function partitionBooksByBorrowedStatus(books) {

  let returned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
  );

  let borrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
  );

  let result = [[...borrowed], [...returned]];

 return result;
}


function getBorrowersForBook(book, accounts) {
  let result = [];
  const bookBorrows = book.borrows;
  bookBorrows.forEach((borrow) => {
      let borrower = accounts.find((account) => account.id === borrow.id);
      borrower.returned = borrow.returned;
      result.push(borrower);
  }
  )
  return result.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
