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
    handleRate = () => {
        const movies = this.state.movies.sort((x, y) => y.rate - x.rate)
        this.setState({ movies: movies })
    }
    handleAToZ = () => {
        const movies = this.state.movies.sort(function (a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            if (textA < textB)
                return -1
            if (textA > textB)
                return 1
            return 0
        });
        this.setState({ movies })
    }
    handleZToA = () => {
        const movies = this.state.movies.sort(function (a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            if (textA < textB)
                return 1
            if (textA > textB)
                return -1
            return 0
        });
        this.setState({ movies })
    }
    handleAction = () => {
        console.log('Action')
        const movies = this.state.movies.filter(movie => {
            return movie.genre.indexOf('Action') !== -1
        })
        this.setState({ movies })
    }
    render() {
        const allMovies = this.state.movies.map(movie =>
            <MovieItem key={uuid()} movies={movie} />)
        return (
            <main>
                <div className="button">
                    <button onClick={this.handleAscending}> Sort by Date Ascending</button>
                    <button onClick={this.handleDescending}> Sort by Date Descending</button>
                    <button onClick={this.handleRate}>  Best Rate</button>
                    <button onClick={this.handleAToZ}>  A-Z</button>
                    <button onClick={this.handleZToA}> Z-A</button>
                    <button onClick={this.handleAction}>Action</button>
                </div>
                <section>
                    {allMovies}
                </section>
            </main>
        );
    }
}


export default MoviesList;