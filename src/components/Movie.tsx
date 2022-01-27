import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type MovieProps = {
    id: number;
    coverImage: string | undefined;
};

type PosterProps = {
    coverImage: string | undefined;
    $width: string;
    $height: string;
};

const Container = styled.div`
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

const Movie: FC<MovieProps> = ({ id, coverImage }) => (
    <Container>
        <Link to={`/${id}`}>
            <Poster coverImage={coverImage} $width="100%" $height="100%" />
        </Link>
    </Container>
);

export default Movie;
