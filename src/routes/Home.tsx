import React, { FC } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

import type { MovieType } from './Details';
import Movie from '../components/Movie';

type ResponseMovies = {
    movies: Array<MovieType>;
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45vh;
    color: #fff;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 60px;
    font-weight: 600;
`;

const Subtitle = styled.h3`
    font-size: 35px;
`;

const Loading = styled.div`
    margin-top: 10px;
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
`;

const Home: FC = () => {
    const { loading, data } = useQuery<ResponseMovies>(GET_MOVIES);

    return (
        <Container>
            <Header>
                <Title>Apollo 2022</Title>
                <Subtitle>Movies database on React, Apollo, GraphQL</Subtitle>
            </Header>
            {loading && <Loading>Loading..</Loading>}
            {!loading && data?.movies.map((movie) => <Movie key={movie.id} id={movie.id} />)}
        </Container>
    );
};

export default Home;
