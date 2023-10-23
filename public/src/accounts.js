

function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((acctA, acctB) => (acctA.name.last > acctB.name.last ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let borrows = 0;
  for (let i = 0; i<books.length; i++) {
    bookBorrows = books[i].borrows;
    let result = bookBorrows.filter((borrow) => borrow.id === account.id);
    borrows += result.length;
  }
  return borrows;
}




function getBooksPossessedByAccount(account, books, authors) {
  let bookList = [];
  for (let i = 0; i<books.length; i++) {
    bookBorrows = books[i].borrows;
    let result = bookBorrows.some((borrow) => borrow.id === account.id && borrow.returned === false);
    if (result) {
      let author = authors.find((author) => author.id === books[i].authorId);
      books[i].author = author;
      bookList.push(books[i]);
    }
  }
  return bookList;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


