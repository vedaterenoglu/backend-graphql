// Each field in a GraphQL schema is backed by a resolver. Each resolver knows how to fetch the data for its field

// we collect all the resolvers under one resolver here. First we import every resolver and we export them as an arry under the name resolvers.

import helloResolver from "./hello.resolver";
import bookResolver from "./book.resolver";

const resolvers = [
  bookResolver,
  helloResolver];

export default resolvers;
