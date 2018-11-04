import React ,{Component} from 'react';
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";

export class Home extends Component {
    state = {usedSearch: false, results: []}

  _handleResults = (results) => {
    this.setState({results, usedSearch: true})
  }

  _renderResults(){
    return this.state.results.length === 0 
      ? <p>Sorry Results not found</p>
      : <MoviesList results={this.state.results}/>
  }
    render(){
        return(
            <div className="page">
                <Title>search movies</Title>
                <div className="searchForm">
                <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch
                ? this._renderResults()
                : <small>Use the form to search a movie</small>
                }
            </div>
        )
    }
}