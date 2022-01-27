import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

export type MovieType = {
    id: number;
    title: string;
    medium_cover_image: string;
    description_intro: string;
};

type ResponseMovie = {
    movie: MovieType;
};

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;

const Details: FC = () => {
    const { id } = useParams();
    const { loading, data } = useQuery<ResponseMovie>(GET_MOVIE, { variables: { id } });

    if (loading) return <>Loading...</>;

    if (data?.movie) return <h1>{data.movie.title}</h1>;

    return <>About the movie with id: {id}</>;
};

export default Details;
