import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Poster } from '../routes/Details';

type MovieProps = {
    id: number;
    coverImage: string | undefined;
};

const Container = styled.div`
    height: 380px;
    width: 100%;
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Movie: FC<MovieProps> = ({ id, coverImage }) => (
    <Container>
        <Link to={`/${id}`}>
            <Poster coverImage={coverImage} $width="100%" $height="100%" />
        </Link>
    </Container>
);

export default Movie;
