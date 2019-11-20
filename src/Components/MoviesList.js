import React from 'react';
import MovieItem from './MovieItem';
import movies from '../data/dataMovies'
import './moviesList.css'
import uuid from 'react-uuid'


const MoviesList = () => {
    const allMovies = movies.map(movie => <MovieItem key={uuid()} movies={movie} />)
    return (
        <section>
            {allMovies}
        </section>
    );
}

export default MoviesList;