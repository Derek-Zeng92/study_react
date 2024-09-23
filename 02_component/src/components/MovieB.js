import React, { Component } from 'react'
import MovieList from "./MovieList";
import { withFetching } from "../HOC/WithFetch";
@withFetching('B')
class MovieB extends Component {

  render() {
    return (
      <MovieList movies={this.props.data}></MovieList>
    )
  }
}
export default MovieB;
