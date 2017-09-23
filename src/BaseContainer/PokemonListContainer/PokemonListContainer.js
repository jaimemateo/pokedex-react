import React, { Component } from 'react';

import PokemonCardComponent from './PokemonCardComponent';

class PokemonListContainer extends Component {

  constructor(props){
    super(props);

		this.state = {
			list: []
		};
  }

  componentDidMount() {
    this.GetPokemonList();
	}
	
	GetPokemonList() {
    fetch('http://pokeapi.co/api/v2/pokemon/?limit=5')
		.then((response) =>  {
			if(response.status === 200) return response.json();
			else throw new Error('Something went wrong on Pokeapi!');
		})
		.then((response) => {
			this.setState({ list: response.results});
		})
		.catch((error) =>  {
			console.error(error);
		});
	}

	render() {
		const pokemonItems = this.state.list.map((pokemon) =>
			<li key={pokemon.name}>
				<PokemonCardComponent name={pokemon.name} />
			</li>
		);
    return (
			<div>
				<h1>Pokemon List Container</h1>
				<ul> {pokemonItems} </ul>
			</div>
    );
  }
}

export default PokemonListContainer;
