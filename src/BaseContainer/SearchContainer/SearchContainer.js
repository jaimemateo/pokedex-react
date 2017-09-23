import React, { Component } from 'react';

import PokemonListContainer from '../PokemonListContainer';

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
        <input type="text" placeholder="Search for a Pokémon"
        value={this.state.searchPokemon} onChange={this.handleChange} />
        < PokemonListContainer search={this.state.searchPokemon} />
      </div>
    );
  }
}

export default SearchContainer;
