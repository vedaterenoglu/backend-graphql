// Required by GraphQL and provides a clear contract for client-server communication. It’s an abstract description of the server’s capabilities

// Schema definition for the Books

import {
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const bookSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
	  enum BookType {
      Print
			Audiobook
			eBook
    }
		type Query {
			getBooks: [Book]
		}
		type Mutation {
			addBook(title: String, author: String,type:BookType): Book
			deleteBook(_id: String): Book
			updateBook(_id: String, title: String, author: String, type:BookType): Book
		}
		type Book {
			_id: String
			title: String
      author: String
      type: BookType
		}
	`
});
export default bookSchema;
