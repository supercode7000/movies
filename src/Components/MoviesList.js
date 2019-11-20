import React from 'react';
import MovieItem from './MovieItem';
import movies from '../data/dataMovies'
import './moviesList.css'

const MoviesList = () => {
    const allMovies = movies.map(movie => <MovieItem movies={movie} />)
    return (
        <section>
            {allMovies}
        </section>
    );
}

export default MoviesList;