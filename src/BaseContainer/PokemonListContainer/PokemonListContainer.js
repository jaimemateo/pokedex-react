import React, { Component } from 'react';

import PokemonCardComponent from './PokemonCardComponent';
import PaginationComponent from './PaginationComponent';

import './styles.scss';

class PokemonListContainer extends Component {

  constructor(props){
    super(props);

		this.state = {
			list: []
		};
		this.GetPokemonList = this.GetPokemonList.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.search !== this.props.search) {
			this.GetPokemonList();
		}
	}

  componentDidMount() {
    this.GetPokemonList();
	}

	GetPokemonPageList = (page) => {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=5&offset=' + page * 5)
		.then((response) =>  {
			if(response.status === 200) return response.json();
			else throw new Error('Something went wrong on Pokeapi!');
		})
		.then((response) => {
			this.setState({ list: response.results});
		})
		.catch((error) =>  {
			console.log('Error message')
		});
	}
	
	GetPokemonList() {
		const { search } = this.props
		if (search === "") {
			fetch('https://pokeapi.co/api/v2/pokemon/?limit=5')
			.then((response) =>  {
				if(response.status === 200) return response.json();
				else throw new Error('Something went wrong on Pokeapi!');
			})
			.then((response) => {
				this.setState({ list: response.results});
			})
			.catch((error) =>  {
				console.log('Error message')
			});
		}
		else {
			fetch('https://pokeapi.co/api/v2/pokemon/' + search)
			.then((response) =>  {
				if(response.status === 200) return response.json();
				else throw new Error('Something went wrong on Pokeapi!');
			})
			.then((response) => {
				this.setState({ list: [response] });
			})
			.catch((error) =>  {
				this.setState({ list: [] });
			});
		}
	}

	render() {
		const pokemonItems = this.state.list.map((pokemon) =>
			<li key={pokemon.name}>
				< PokemonCardComponent pokemon={pokemon} />
			</li>
		);
    return (
			<div className="list-container">
				<ul> {pokemonItems} </ul>
      	< PaginationComponent changePage={this.GetPokemonPageList} />
			</div>
    );
  }
}

export default PokemonListContainer;
