// Our Apollo Server backend's starting point. We use Apollo Sever standalone.

// We import the packages we need: Apollo Server and Mongoose.

import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

// We import the objects we need: GraphQLSchema and mergeSchemas

import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";

// We import classes we need: schemas, resolvers and controllers
import schemas from "./schemas/schema";
import resolvers from "./resolvers/resolvers";
// import controllers from "./controllers/controllers";

import { bookController } from "./controllers/controllers";

// We connect to MongoDB Atlas database
// We define the MongoDB url. You can get it from the cluster on the MongoDB Atlas. For security reasons we assign the path in .env file to MONGODB_URI variable and now we assign it to constant mongoUrl to use it below to connect to database.

require('dotenv').config() // dotenv is required

const isProduction = process.env.NODE_ENV === 'production';
console.log(`Node Environment is production?:${isProduction}`);
const dbEnv = process.env.MONGODB_DEV;

// We connect to MongoDB database via Mongoose (either locally or remotely depens on your prefer in dotenv file) if connected we send message to consol.log else we catch the error.

if (dbEnv === 'localserver') {
	// statement(s) will execute if the boolean expression is true
	const mongoUrl: string = process.env.MONGODB_URI_LOCAL;
	const mongo = mongoose.connect(mongoUrl, {useNewUrlParser: true });
mongo.then(() => {
console.log('MongoDB connected to MongoDB localhost');
}).catch((err) => {
console.log('err', err);
});
	console.log(`Developer's database connection choice is:${dbEnv}`);
} else {
	// statement(s) will execute if the boolean expression is false
	const mongoUrl: string = process.env.MONGODB_URI;
	const mongo = mongoose.connect(mongoUrl, {useNewUrlParser: true });
mongo.then(() => {
console.log('MongoDB connected to MongoDB remote server');
}).catch((err) => {
console.log('err', err);
});
	console.log(`Developer's database connection choice is:${dbEnv}`);
}

// help to debug Mongoose
mongoose.set("debug", true); mongoose

// We create a constant schema to perform 'Schema stitching' and it is the process of creating a single GraphQL schema from multiple underlying GraphQL APIs. In other words our main point is to create multiple schemas and resolvers and connect everything togheter at the end instead to put everything in one massive file. That's why we imported 'GraphQLSchema' and 'mergeSchemas'object at the top of the file.

const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

// We create an instance of Apollo Server

 const server = new ApolloServer({
	schema,
	});
const port = 4300 // we assign the port for Apollo Server

// Apollo Server will listen for requests on port 4300 and we send a message to consol.log that indicates the server s running on port 4300.

server.listen(port).then(({ url }) => {
	console.log(`🚀  Apollo Server ready at ${url}`);
});
