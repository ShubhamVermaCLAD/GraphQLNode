const { GraphQLString, GraphQLID, GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql');
const resolver = require('../resolver/resolver');


const bookType = new GraphQLObjectType({
  name: "Book",
  description: "Object Type for Book",
  fields: () => ({
    id: { type: GraphQLID, description: "Unique book ID." },
    name: { type: GraphQLString, description: "Book Name." },
    genre: { type: GraphQLString, description: "Genre of Book." },
    authorId: {
      type: authorType,
      description: "Author Object",
      resolve: resolver.getAutherFromBook,
    },
  }),
});

const authorType = new GraphQLObjectType({
  name: "Author",
  description: "Object Type for Author",
  fields: () => ({
    id: { type: GraphQLID, description: "Unique Id for Author" },
    name: { type: GraphQLString, description: "Name of Author" },
    age: { type: GraphQLInt, description: "Age of Author" },
    email: { type: GraphQLString, description: "Email of Author" },
    books: {
        type: new GraphQLList(bookType),
        description: "Book Object",
        resolve: resolver.getBooksFromAuthor,
    },
  }),
});

module.exports = {
    bookType,
    authorType
}