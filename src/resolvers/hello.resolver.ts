// Each field in a GraphQL schema is backed by a resolver. Each resolver knows how to fetch the data for its field

const helloResolver = {
	Query: {
		hello: () => {
			return "Hello world!";
		}
	}
};

export default helloResolver;
