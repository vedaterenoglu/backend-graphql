// Used by mongo/mongoose to describe each collection and the schema that is using

import mongoose from "mongoose";

const Promise = require('bluebird');
Promise.promisifyAll(mongoose);

// We use "shortid" for create short IDs on MongoDB database
// We define _id in "BookSchema" and generate automatically short IDs

const shortid = require('shortid');
const BookSchema = new mongoose.Schema({
	_id: {
		'type': String,
		'default': shortid.generate
	},
  title: String,
  author: String,
  type: String,
	});

const Book = mongoose.model("books", BookSchema);
export { Book };
