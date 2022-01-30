// @ts-nocheck
import React, { FC } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
        toggleLikeMovie(id: $id, isLiked: $isLiked) @client
    }
`;

type MovieProps = {
    id: number;
    coverImage: string | undefined;
    isLiked: boolean;
};

type PosterProps = {
    coverImage: string | undefined;
    $width: string;
    $height: string;
};

const Container = styled.div`
    position: relative;
    height: 380px;
    width: 100%;
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Poster = styled.div<PosterProps>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    background-color: transparent;
    background-size: cover;
    background-position: center center;
    background-image: url(${({ coverImage }) => coverImage});
`;

const LikeBtn = styled.button`
    position: absolute;
    right: 50%;
    bottom: 10px;
    padding: 3px 10px;
    color: #fff;
    background-color: #fd723a;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    border-color: #c7c77a;
    border-radius: 7px;
    transform: translateX(50%);
`;

const Movie: FC<MovieProps> = ({ id, coverImage, isLiked }) => {
    const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
        variables: { id, isLiked },
    });

    return (
        <Container>
            <Link to={`/${id}`}>
                <Poster coverImage={coverImage} $width="100%" $height="100%" />
            </Link>
            <LikeBtn onClick={toggleLikeMovie}>{isLiked ? <>Not&nbsp;liked</> : 'Liked'}</LikeBtn>
        </Container>
    );
};

export default Movie;
