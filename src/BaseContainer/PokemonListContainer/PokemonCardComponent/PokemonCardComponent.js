import React, { Component } from 'react';

class PokemonCardComponent extends Component {

  constructor(props){
    super(props);

		this.state = {
			pokemon: {
				types: [],
				sprites:[] 
			}
		};
		this.GetPokemonDataByName =this.GetPokemonDataByName.bind(this);
  }

  componentDidMount() {
		this.GetPokemonDataByName();
	}
	
	GetPokemonDataByName() {
		const { pokemon } = this.props
		if (!pokemon.id) {
			fetch('http://pokeapi.co/api/v2/pokemon/' + pokemon.name)
			.then((response) =>  {
				if(response.status === 200) return response.json();
				else throw new Error('Something went wrong on Pokeapi!');
			})
			.then((response) => {
				this.setState({ pokemon: response});
			})
			.catch((error) =>  {
				console.log('Error message')
			});
		}
		else {
			this.setState({ pokemon: pokemon});
		}
	}

	render() {
		const pokemonTypes = this.state.pokemon.types.map((type) =>
			<li key={type.slot}>
				{type.type.name}
			</li>
		);
    return (
			<div>
				<h2>{this.state.pokemon.id}</h2>
				<h3>{this.state.pokemon.name}</h3>
				<img src={this.state.pokemon.sprites.front_default} alt=""/>
				<ul>{pokemonTypes}</ul>
			</div>
    );
  }
}

export default PokemonCardComponent;
