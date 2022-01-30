import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://svensktutby-graphql-movie.herokuapp.com',
    cache: new InMemoryCache(),
    resolvers: {
        Movie: {
            isLiked: () => false,
        },
        Mutation: {
            toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
                cache.modify({
                    id: `Movie:${id}`,
                    fields: {
                        // eslint-disable-next-line @typescript-eslint/no-shadow
                        isLiked: (isLiked: boolean) => !isLiked,
                    },
                });
            },
        },
    },
});

export default client;
