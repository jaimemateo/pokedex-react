import React, { Component } from 'react';

import PokemonCardComponent from './PokemonCardComponent';

class PokemonListContainer extends Component {

  constructor(props){
    super(props);

		this.state = {
			list: [],
			search: ''
		};
		this.GetPokemonList =this.GetPokemonList.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ search: nextProps.search });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.search !== this.props.search) {
			this.GetPokemonList();
		}
	}

  componentDidMount() {
    this.GetPokemonList();
	}
	
	GetPokemonList() {
		const { search } = this.props
		if (search === "") {
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
		else {
			let pokemon = {}
			pokemon = {
				name: this.state.search
			}
			this.setState({ list: [pokemon]});
		}
	}

	render() {
		const pokemonItems = this.state.list.map((pokemon) =>
			<li key={pokemon.name}>
				<PokemonCardComponent name={pokemon.name} />
			</li>
		);
    return (
			<div>
				<ul> {pokemonItems} </ul>
			</div>
    );
  }
}

export default PokemonListContainer;
