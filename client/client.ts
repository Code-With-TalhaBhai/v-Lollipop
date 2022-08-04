import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const client = new ApolloClient({
    uri: `${process.env.VERCEL_URL}/api/apollo`,
    cache: new InMemoryCache(),
  });