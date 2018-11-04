import React, { Component } from "react";

const APY_KEY = 'ab9c2b57';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange= (e) => {
        this.setState({inputMovie: e.target.value});
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const {inputMovie} = this.state;
        
        fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(data => {
                const {Search = []} = data;
                // console.log(Search, totalResults);
                this.props.onResults(Search);
            })
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit} >
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Search a movie..." 
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}