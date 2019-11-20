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
        const ascendingMovies = this.state.movies.sort((x, y) => x.year - y.year)
        this.setState({ movies: ascendingMovies })
    }
    handleDescending = () => {
        console.log("descending")
        const descendingMovies = this.state.movies.sort((x, y) => y.year - x.year)
        this.setState({ movies: descendingMovies })
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