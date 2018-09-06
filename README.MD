# Backend with GraphQL, Apollo Server, MongoDB and TypeScript

![apollostack-300x300](https://user-images.githubusercontent.com/38211466/44810781-1a26ce00-abd3-11e8-8858-ca3e2a393094.png)

>  **A simple, straight forward guide to build a Backend using GraphQL server with Apollo Server.**

## About this repository

[![Donate](https://img.shields.io/badge/paypal-donate-179BD7.svg)](https://www.paypal.me/vedaterenoglu)

[![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)


### This project uses the followings:
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**N**ode.js](https://nodejs.org): runtime environment
* [**T**ypeScript](https://www.typescriptlang.org/)
* [**A**pollo Server](https://www.apollographql.com/docs/apollo-server/): backend framework
* [**G**raphQL](https://graphql.org/): GraphQL as a query language for API

### Other tools and technologies used:
* [shortid](https://www.npmjs.com/package/shortid): short ID generator for MongoDB

### Repository coverage
* This repository does not cover the usage of the MongDB and I strictly recommend to you get an online free course on [MongDB University](https://university.mongodb.com/)

> ### About [Apollo Server](https://www.apollographql.com/docs/apollo-server/)<br/>
> Apollo Server helps you build a GraphQL layer over your existing REST APIs and databases. It's simple to get started:
> * Describe the data your services have with a schema
> * Implement your schema with resolvers that fetch data from your existing backend
> * Start your server! Apollo Server wires up everything for you.
> * Apollo Server is written in JavaScript to enable cutting-edge features like caching, tracing, and execution on the edge.<br/><br/>


> ### About [GraphQL](https://graphql.org/learn/)
> * GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.<br/><br/>
> * A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.<br/><br/>

> ### About [Node.js](https://nodejs.org/en/)
> * Node.js is an open source server environment
> * Node.js is free
> * Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
> * Node.js uses JavaScript on the server<br/><br/>

> ### About [TypeScript](https://www.typescriptlang.org/) (TypeScript is the superset of the JavaScript)
> * TypeScript starts from the same syntax and semantics that millions of JavaScript developers know today. Use existing JavaScript code, incorporate popular JavaScript libraries, and call TypeScript code from JavaScript
<br/>TypeScript compiles to clean, simple JavaScript code which runs on any browser, in Node.js, or in any JavaScript engine that supports [ECMAScript](http://www.ecma-international.org/) 3 (or newer).<br/><br/>
> *  Types enable JavaScript developers to use highly-productive development tools and practices like static checking and code refactoring when developing JavaScript applications.
<br/>Types are optional, and type inference allows a few type annotations to make a big difference to the static verification of your code. Types let you define interfaces between software components and gain insights into the behavior of existing JavaScript libraries.<br/><br/>
> * TypeScript offers support for the latest and evolving JavaScript features, including those from [ECMAScript 2015](http://es6-features.org/#Constants) and future proposals, like async functions and decorators, to help build robust components.
<br/>These features are available at development time for high-confidence app development, but are compiled into simple JavaScript that targets ECMAScript 3 (or newer) environments.<br/>
<br/>

> ### About [Mongoose](https://mongoosejs.com/)
> * Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.<br/><br/>
> * Mongoose is a MongoDB [ODM](https://www.quora.com/MongoDB-What-is-the-idea-behind-an-ORM-ODM-for-a-NoSQL-database) (the [NoSQL](https://en.wikipedia.org/wiki/NoSQL) equivalent of an [ORM](https://www.quora.com/What-is-ORM-object-relational-mapping)) for Node. It provides you with a simple validation and query API to help you interact with your MongoDB database.<br/><br/>

> ### About [shortid](https://www.npmjs.com/package/shortid)
> * ShortId creates amazingly short non-sequential url-friendly unique ids. Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see.<br/><br/>
> * By default 7-14 url-friendly characters: A-Z, a-z, 0-9, _-<br/><br/>
> * Supports cluster (automatically), custom seeds, custom alphabet.<br/><br/>
> * Can generate any number of ids without duplicates, even millions per day.<br/><br/>
> * Perfect for games, especially if you are concerned about cheating so you don't want an easily guessable id.<br/><br/>
> * Apps can be restarted any number of times without any chance of repeating an id.<br/><br/>
> * Popular replacement for Mongo ID/Mongoose ID.<br/><br/>
> * Works in Node, io.js, and web browsers.
<br/><br/>

> ### About [Babel](https://babeljs.io/docs/en/):
> It is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.<br/><br/>

## Prerequisites

* Install [Node.js](https://nodejs.org)
* Install [MongoDB](#)
* Create a databse with the name "libraryInventory" and within the database create a collection with the name "books".
* Clone this repository: `git clone git@github.com:vedaterenoglu/backend-graphql.git`
> * ### Open the ".env.example" file and set the values for;<br/><br/>
> MONGODB_URI<br/><br/>
MONGODB_URI_LOCAL<br/><br/>
MONGODB_DEV<br/><br/>
>### Please follow the instrutions which is given as comments in the file.
> rename the file ".env.example" as ".env"<br/><br/>

![dotenv](https://user-images.githubusercontent.com/38211466/45117173-2f60a700-b155-11e8-8fb9-227c30b851c2.png)<br/><br/>

* `cd backend-graphql` change the directory to the app folder and run the following
* Install the dependecies
```js
// Install the dependecies

npm i
```
* Run the "seed.js" To create example data on MongoDB database
```js
// Seed the database

npm run seed
```
You can see the followings on your terminal<br/><br/>
![seed-db](https://user-images.githubusercontent.com/38211466/45144024-34594100-b1bd-11e8-8d75-49b78f3c9482.png)<br/><br/>

You can check data insertion with MongoDB Compass <br/><br/>
![mongodb-compass](https://user-images.githubusercontent.com/38211466/45116540-54ecb100-b153-11e8-8308-42de3f378326.png)


* Run in development mode
### Development mode
```js
// run in development mode

npm run dev
```
You can see the followings on your terminal<br/><br/>
![npm-run-dev](https://user-images.githubusercontent.com/38211466/45144152-95811480-b1bd-11e8-8a5f-58858d1cd5e6.png)

* Open your browser and see the server running on `localhost:4300/graphql` with the GraphQL playground.

```js
// write the query in playground window to get the results

query{
  getBooks {
    title
  }
}
```
<br/><br/>
You will get the following results. <br/><br/>

![books-title](https://user-images.githubusercontent.com/38211466/45116858-4fdc3180-b154-11e8-9590-b44d9bb31325.png)

```js
// write the query in playground window to get the results

query{
  getBooks {
    _id
    title
    author
    type
  }
}
```
You will get the following results. <br/><br/>


![books-all-info](https://user-images.githubusercontent.com/38211466/45116915-7732fe80-b154-11e8-8776-3ce5047a6175.png)<br/><br/>


```js
// write the mutation in playground window to add the book.

mutation {
  addBook(
    title: "Misrabels",
    author: "Victor Hugo",
    type: eBook
  )
    {
    _id
    title
    author
    type
  }
}

```
You will get the following results. <br/><br/>
![add-book](https://user-images.githubusercontent.com/38211466/45116965-9a5dae00-b154-11e8-9f97-b55d02b6cdc8.png)<br/><br/>
```js
// write the mutation in playground window to delete the book with the ID: yHjWu7y01h !!! use a real id from your own database!!!

mutation {
  deleteBook(_id: "yHjWu7y01h") {
    _id
  }
}
```

```js
// write the mutation in playground window to update the book with the ID: wf45tiWtSn !!! use a real id from your own database!!!

mutation {
  updateBook(
    _id: "wf45tiWtSn"
    title: "Miserables"
    author: "Victor Hugo"
    type: eBook
  ) {
    _id
  }
}
```

* Run in development mode
!!! If you want add example data to MongoDB Don't forget to seed it.
```js
npm run seed
```
### Production mode
```js
// run in production mode

npm run dev
```
![npm-run-prod](https://user-images.githubusercontent.com/38211466/45144232-d6792900-b1bd-11e8-9f3d-4413b4d87599.png)<br/><br/>

## Documentation

- Check out the official [Mongoose documentation](https://mongoosejs.com/) for more information.<br/><br/>
- Check out the official [Node.js documentation](https://nodejs.org) for more information.<br/><br/>
- Check out the official [TypeScript documentation](https://www.typescriptlang.org/) for more information.<br/><br/>
- Check out the official [Apollo Server documentation](https://www.apollographql.com/docs/apollo-server/v2/) for more information.<br/><br/>
- Check out the official [GrapQL documentation](https://graphql.org/) for more information.<br/><br/>
- Check out the official [shortid documentation](https://www.npmjs.com/package/shortid).<br/><br/>
- Check out the official [Babel documentation](https://babeljs.io/docs/en/) for more information.<br/><br/>
- Check out [Enum type](https://graphql.org/learn/schema/) usage in GrapQL Schema for more information.<br/><br/>

## Please open an issue if
* you have any suggestion to improve this project
* you noticed any problem or error

## Wiki
To get more help about this project, [visit the official wiki](#).

### Author
![Vedat Erenoglu](https://s.gravatar.com/avatar/0e529b095e48c12b9834e4d6ec081dc3?s=80)
* [Vedat Erenoglu](https://github.com/VedatErenoglu)
### e-mail:
* info@vedaterenoglu.com
### Linkedin Profile
* https://www.linkedin.com/in/vedaterenoglu/

