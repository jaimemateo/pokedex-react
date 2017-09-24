import React, { Component } from 'react';

import './styles.scss';

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
		if (pokemon.url) {
			fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
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
			<li className={"card-type"} key={type.slot}>
				<span className={type.type.name}> {type.type.name} </span>
			</li>
		);
    return (
			<div className="card-component">
				<h3 className="card-title">{this.state.pokemon.id}. {this.state.pokemon.name}</h3>
				<img className="card-sprite" src={this.state.pokemon.sprites.front_default} alt=""/>
				<ul  className="card-types">{pokemonTypes}</ul>
			</div>
    );
  }
}

export default PokemonCardComponent;
