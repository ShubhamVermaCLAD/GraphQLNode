const bookModel = require("../model/book");
const authorModel = require("../model/author");

const getAllBooks = (parent, args) => {
  return bookModel.find({});
};
const getAllAuthors = (parent, args) => {
  return authorModel.find({});
};
const getBookByID=(parent, args) => {
  return bookModel.findById(args.id);
};
const getAuthorByID = (parent, args) => {
  return authorModel.findById(args.id);
};
const getAutherFromBook = (parent, args) => {
  return authorModel.findById(parent.authorId);
};
const getBooksFromAuthor = (parent, args) => {
  return bookModel.find({ authorId: parent.id });
};

module.exports = {
  getAllBooks,
  getAllAuthors,
  getBookByID,
  getAuthorByID,
  getAutherFromBook,
  getBooksFromAuthor,
};
