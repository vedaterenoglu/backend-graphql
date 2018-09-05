// Required by GraphQL and provides a clear contract for client-server communication. It’s an abstract description of the server’s capabilities

// We create an array of all the schema that we want to define

import helloSchema from "./hello.schema";
import bookSchema from "./book.schema";

const schemas = [bookSchema, helloSchema];

export default schemas;
