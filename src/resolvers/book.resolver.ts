// Each field in a GraphQL schema is backed by a resolver. Each resolver knows how to fetch the data for its field

import { bookController } from "../controllers/controllers";
// import { AuthenticationError } from "apollo-server";

const bookResolver = {
	Mutation: {
		addBook(root: any, args: any) {
			return bookController.addBook(root, args);
		},
		deleteBook(root: any, args: any) {
			return bookController.deleteBook(root, args);
		},
		updateBook(root: any, args: any) {
			return bookController.updateBook(root, args);
		}
	},
	Query: {
		getBooks(root: any, args: any) {
			return bookController.getBooks(root, args);
		}
	}
};

export default bookResolver;
