import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
    uri: 'https://v-lollipop.vercel.app/api/apollo',
    cache: new InMemoryCache(),
  });