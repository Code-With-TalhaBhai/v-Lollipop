import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const client = new ApolloClient({
    uri: 'http://localhost:3000/api/apollo',
    cache: new InMemoryCache(),
  });