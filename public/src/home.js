

function getTotalBooksCount(books) {
  let result  = 0;
  books.forEach(() => result += 1);
  return result;
}

function getTotalAccountsCount(accounts) {
  let result  = 0;
  accounts.forEach(() => result += 1);
  return result;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      result += 1;
    }
  }
  )
  return result;
}

function topFive(results) {
  return results.sort((itemA, itemB) => (itemA.count < itemB.count ? 1 :-1)).slice(0,5);
}

function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre);
  let result = genres.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  result = Object.entries(result).map(([name, count]) => ({name,count}));
  return topFive(result);
}

function getMostPopularBooks(books) {
  result = books.map((book) => {
   return {name: book.title, count: book.borrows.length };
  })
  return topFive(result);
}


function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let currAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     currAuthor.count += book.borrows.length;
    }
   });
   result.push(currAuthor);
  });
  return topFive(result);
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
