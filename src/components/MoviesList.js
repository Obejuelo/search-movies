import React, {Component} from 'react';
import { PropTypes } from "prop-types";
import { Moovie } from "./Movie";

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render(){
        const {results} = this.props;
        return(
            <div className="MoviesList">
            {
                results.map(movie => {
                    return(
                        <div key={movie.imdbID} className="MoviesList-item">
                            <Moovie
                            id={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                            />
                        </div>
                        )
                    })
            }
            </div>
        )
    }
}