import React, { Component } from 'react'
import MovieList from './MovieList'
import { withFetching } from "../HOC/WithFetch";
@withFetching('A')
class MovieA extends Component {

  render() {
    return (
      <MovieList movies={this.props.data}></MovieList>
    )
  }
}
export default MovieA
