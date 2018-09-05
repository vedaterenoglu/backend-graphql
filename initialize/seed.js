// We import Mongoose.

const mongoose = require("mongoose");

// We create model Book
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

// We connect to MongoDB Atlas database
// We define the MongoDB url. You can get it from the cluster on the MongoDB Atlas. For security reasons we assign the path in .env file to MONGODB_URI variable and now we assign it to constant mongoUrl to use it below to connect to database.

require('dotenv').config() // dotenv is required

const isProduction = process.env.NODE_ENV === 'production';
console.log(`Node Environment is production?:${isProduction}`);
const dbEnv = process.env.MONGODB_DEV;

// We connect to MongoDB database via Mongoose (either locally or remotely depens on your prefer in dotenv file) if connected we send message to consol.log else we catch the error.

function task1() {
if (dbEnv === 'localserver') {
	// statement(s) will execute if the boolean expression is true
	const mongoUrl = process.env.MONGODB_URI_LOCAL;
	const mongo = mongoose.connect(mongoUrl, {useNewUrlParser: true });
mongo.then(() => {
console.log('MongoDB connected to MongoDB localhost');
}).catch((err) => {
console.log('err', err);
});
	console.log(`Developer's database connection choice is:${dbEnv}`);
} else {
	// statement(s) will execute if the boolean expression is false
	const mongoUrl = process.env.MONGODB_URI;
	const mongo = mongoose.connect(mongoUrl, {useNewUrlParser: true });
mongo.then(() => {
console.log('MongoDB connected to MongoDB remote server');
}).catch((err) => {
console.log('err', err);
});
	console.log(`Developer's database connection choice is:${dbEnv}`);
}
// help to debug Mongoose
	mongoose.set("debug", true); mongoose;
}

function task2() {
const book1 = new Book({
		title: 'A Tale of Two Cities',
		author: 'Charles Dickens',
		type: 'eBook',
	});
	book1.save()

const book2 = new Book({
		title: 'The Lord of the Rings',
		author: 'J.R.R. Tolkien',
		type: 'Audiobook'
	});
	book2.save()

const book3 = new Book({
		title: 'Don Quixote',
		author: 'Miguel de Cervantes',
		type: 'Print'
	});
	book3.save()

const book4 = new Book({
		title: 'The Dream of the Red Chamber',
		author: 'Cao Xueqin',
		type: 'eBook'
	});
	book4.save()

const book5 = new Book({
		title: 'The Lion, the Witch and the Wardrobe',
		author: 'C.S. Lewis',
		type: 'Audiobook'
	});
	book5.save()

const book6 = new Book({
		title: 'The Da Vinci Code',
		author: 'Dan Brown',
		type: 'Audiobook'
	});
	book6.save()

const book7 = new Book({
		title: 'The Alchemist',
		author: 'Paulo Coelho',
		type: 'Print'
	});
	book7.save();
}

function task3() {
	mongoose.connection.close()
}
// We use Promises. First we connect to MongoDB and then we send the data and then close the Mongodb connection.

var firstMethod = function() {
	var promise = new Promise(function(resolve, reject){
		setTimeout(function () {
			task1();
				console.log('Connection to database is established.');
				resolve({data: '123'});
		 }, 2000);
	});
	return promise;
};


var secondMethod = function(someStuff) {
	var promise = new Promise(function(resolve, reject){
		setTimeout(function () {
			 task2()
				console.log('Example DATA is sent to MongoDB database.');
				resolve({newData: someStuff.data + ' some more data'});
		 }, 2000);
	});
	return promise;
};

var thirdMethod = function(someStuff) {
	var promise = new Promise(function(resolve, reject){
		setTimeout(function () {
			 task3()
				console.log('Connection to MondoDB is terminated.');
				resolve({result: someStuff.newData});
		 }, 3000);
	});
	return promise;
};

firstMethod()
	.then(secondMethod)
	.then(thirdMethod);
