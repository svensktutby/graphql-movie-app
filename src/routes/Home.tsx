import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

type Movie = {
    id: number;
    title: string;
    medium_cover_image: string;
};

const GET_MOVIES = gql`
    query {
        movies {
            id
            title
            medium_cover_image
        }
    }
`;

const Home: FC = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);

    if (loading) return <>Loading...</>;

    return data?.movies ? (
        <ul>
            {data?.movies.map((movie: Movie, idx: number) => (
                <li key={idx}>{movie?.title}</li>
            ))}
        </ul>
    ) : (
        <div>No any movies</div>
    );
};

export default Home;
