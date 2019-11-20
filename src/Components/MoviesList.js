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
    handleAscending = () => {
        console.log("ascending")
    }
    handleDescending = () => {
        console.log("descending")
    }
    render() {
        const allMovies = this.state.movies.map(movie =>
            <MovieItem key={uuid()} movies={movie} />)
        return (
            <main>
                <div className="button">
                    <button onClick={this.handleAscending}> Sort by Date Ascending</button>
                    <button onClick={this.handleDescending}> Sort by Date Descending</button>
                </div>
                <section>
                    {allMovies}
                </section>
            </main>
        );
    }
}


export default MoviesList;