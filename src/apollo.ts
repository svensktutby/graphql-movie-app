import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://svensktutby-graphql-movie.herokuapp.com',
    cache: new InMemoryCache(),
});

export default client;
