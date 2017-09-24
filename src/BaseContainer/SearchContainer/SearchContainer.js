import React, { Component } from 'react';

import PokemonListContainer from '../PokemonListContainer';
import './styles.css';

class SearchContainer extends Component {

  constructor(props){
    super(props);

		this.state = {
      searchPokemon: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchPokemon: e.target.value});
  };

	render() {
    return (
      <div>
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search for a Pokémon"
          value={this.state.searchPokemon} onChange={this.handleChange} />
        </div>
        < PokemonListContainer search={this.state.searchPokemon} />
      </div>
    );
  }
}

export default SearchContainer;
