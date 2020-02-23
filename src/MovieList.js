import React, { Component } from 'react';
import Loader from './Loader.js';
import MovieTile from './MovieTile.js';

class MovieList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = this.props.data;
        let isLoading = this.props.isLoading;
        let isDataEmpty = Object.entries(data).length === 0;
        let movieList = isLoading ? <Loader /> : isDataEmpty ? <div>No data available.</div> :
            Object.entries(data).map((movie, index) => <MovieTile key={index} {...movie[1]} />);
        return (
            <div className='movieList'>{movieList}</div>
        );
    }
};

export default MovieList;
