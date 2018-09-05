// Required by GraphQL and provides a clear contract for client-server communication. It’s an abstract description of the server’s capabilities

import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const helloSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			hello: String
		}
	`
});
addMockFunctionsToSchema({ schema: helloSchema });

export default helloSchema;
