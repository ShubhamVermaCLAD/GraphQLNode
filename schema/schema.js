const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql');
const resolver = require('../resolver/resolver');
const { authorType, bookType } = require('../type/types');
const mutation = require('../mutation/mutation');

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "Object type for Root Query",
  fields: {
    books: {
      type: new GraphQLList(bookType),
      description: "Get All the Books Present.",
      resolve: resolver.getAllBooks,
    },
    authors: {
      type: new GraphQLList(authorType),
      description: "Get All the Authors Present.",
      resolve: resolver.getAllAuthors,
    },
    book: {
      type: bookType,
      description: "Get Specific Book by Passing Book Id.",
      args: {
        id: { type: GraphQLNonNull(GraphQLID), description: "Unique Book ID" },
      },
      resolve: resolver.getBookByID,
    },
    author: {
      type: authorType,
      description: "Get Specific Book by Passing Book Id.",
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve: resolver.getAuthorByID,
    },
  },
});

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: mutation
});