// it’s where the action happens, it defines the logic and the action to take to retrieve the information we need

import { Book } from "../models/books";
// import { Types } from "mongoose";

const bookController = {
	addBook: (root: any, args: any) => {
		const book = new Book({ _id: args._id, title: args.title, author: args.author, type: args.type });
		return book.save();
	},

	deleteBook: (root: any, args: any) => Book.deleteOne({ _id: args._id }),

	updateBook: (root: any, args: any) => {
		const tempBook = { ...args };
		delete tempBook._id;
		return Book.updateOne({ _id: args._id }, { $set: tempBook });
	},

	getBooks: () => Book.find({})
	};

export { bookController };
