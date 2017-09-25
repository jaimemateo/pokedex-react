import React, { Component } from 'react';

import PokemonCardComponent from './PokemonCardComponent';
import PaginationComponent from './PaginationComponent';

import './styles.scss';

class PokemonListContainer extends Component {

  constructor(props){
    super(props);

		this.state = {
			list: [],
			loading: false
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
		this.setState({loading: true, list:[]});
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=5&offset=' + page * 5)
		.then((response) =>  {
			if(response.status === 200) return response.json();
			else throw new Error('Something went wrong on Pokeapi!');
		})
		.then((response) => {
			this.setState({ list: response.results, loading: false});
		})
		.catch((error) =>  {
			this.setState({ list: [], loading: false});
		});
	}
	
	GetPokemonList() {
		this.setState({loading: true, list:[]});
		const { search } = this.props
		if (search === "") {
			fetch('https://pokeapi.co/api/v2/pokemon/?limit=5')
			.then((response) =>  {
				if(response.status === 200) return response.json();
				else throw new Error('Something went wrong on Pokeapi!');
			})
			.then((response) => {
				this.setState({ list: response.results, loading: false});
			})
			.catch((error) =>  {
				this.setState({ list: [], loading: false});
			});
		}
		else {
			const results = this.state.list.filter(pokemon =>
				pokemon.name.includes(search)
			)
			if(results.length > 0) {
				this.setState({list: results, loading: false});
			}
			else {
				fetch('https://pokeapi.co/api/v2/pokemon/' + search)
				.then((response) =>  {
					if(response.status === 200) return response.json();
					else throw new Error('Something went wrong on Pokeapi!');
				})
				.then((response) => {
					this.setState({ list: [response], loading: false });
				})
				.catch((error) =>  {
					this.setState({ list: [], loading: false });
				});
			}
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
				{this.state.loading &&
					<h2 className="list-loading">Loading...</h2>
				}
				{this.state.list.length === 0 && !this.state.loading &&
					<h2 className="list-empty">Not found!</h2>
				}
				<ul> {pokemonItems} </ul>
				{this.props.search === '' &&
					< PaginationComponent changePage={this.GetPokemonPageList} />
				}
			</div>
		);
  }
}

export default PokemonListContainer;
