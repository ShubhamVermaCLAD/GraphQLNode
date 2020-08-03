const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
} = require("graphql");
const bookModel = require("../model/book");
const authorModel = require("../model/author");
const { authorType, bookType } = require("../type/types");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: authorType,
      args: {
        name: { type: GraphQLString, description: "Name of the Author" },  
        age: { type: GraphQLInt, description: "Age of Author" },
        email: { type: GraphQLString, description: "Email of Author" }
      },
      resolve(parent, args) {
        let author = new authorModel({
          name: args.name,
          age: args.age,
          email: args.email,
        });
        return author.save();
      },
    },
    addBook: {
      type: bookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString), description:"" },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let book = new bookModel({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        return book.save();
      },
    },
  },
});

module.exports = Mutation;
