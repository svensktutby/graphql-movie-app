import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

export type MovieType = {
    id: number;
    title: string;
    rating?: number;
    description_intro?: string;
    language?: string;
    medium_cover_image?: string;
    genres?: string[];
};

type PosterProps = {
    coverImage: string | undefined;
    $width: string;
    $height: string;
};

type ResponseMovie = {
    movie: MovieType;
};

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    color: #fff;
`;

const Column = styled.div`
    width: 50%;
    margin-left: 10px;
`;

export const Poster = styled.div<PosterProps>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    background-image: url(${({ coverImage }) => coverImage});
`;

const Title = styled.h1`
    margin-bottom: 15px;
    font-size: 65px;
`;
const Subtitle = styled.h4`
    margin-bottom: 10px;
    font-size: 35px;
`;
const Description = styled.p`
    font-size: 28px;
`;

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            rating
            description_intro
            language
            medium_cover_image
        }
    }
`;

const Details: FC = () => {
    const { id } = useParams();
    const { loading, data } = useQuery<ResponseMovie>(GET_MOVIE, { variables: { id } });

    return (
        <Container>
            <Column>
                <Title>{loading ? <>Loading...</> : data?.movie?.title}</Title>
                {!loading && (
                    <>
                        <Subtitle>
                            {data?.movie?.language} · {data?.movie?.rating}
                        </Subtitle>
                        <Description>{data?.movie?.description_intro}</Description>
                    </>
                )}
            </Column>
            <Poster coverImage={data?.movie?.medium_cover_image} $width="25%" $height="60%" />
        </Container>
    );
};

export default Details;
