import React, { Component } from 'react';
import MovieItem from './MovieItem';
import movies from '../data/dataMovies'
import './moviesList.css'
import uuid from 'react-uuid'


// const MoviesList = () => {
//     const allMovies = movies.map(movie => <MovieItem key={uuid()} movies={movie} />)
//     return (
//         <section>
//             {allMovies}
//         </section>
//     );
// }
class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: movies }
    }
    render() {
        const allMovies = this.state.movies.map(movie =>
            <MovieItem key={uuid()} movies={movie} />)
        return (
            <section>
                {allMovies}
            </section>
        );
    }
}


export default MoviesList;