import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type MovieProps = {
    id: number;
};

const Movie: FC<MovieProps> = ({ id }) => (
    <div>
        <Link to={`/${id}`}>{id}</Link>
    </div>
);

export default Movie;
