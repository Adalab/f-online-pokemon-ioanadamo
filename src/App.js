import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import SearchName from './components/SearchName';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: { searchName: '' },

			pokemonsData: []
		};
	}

	componentDidMount() {
		this.fetchPokemonData();
	}

	fetchPokemonData = () => {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
			.then(resp => resp.json())
			.then(pokemonsDataNames => {
				pokemonsDataNames.results.map(pokemon => {
					fetch(pokemon.url)
						.then(res => res.json())
						.then(data =>
							this.setState(prevState => {
								const newPokemons = [...prevState.pokemonsData, data];
								return { pokemonsData: newPokemons };
							})
						);
				});
			});
	};

	handlerInputSearch = e => {
		const { value } = e.currentTarget;
		this.setState({
			filters: { searchName: value }
		});
	};

	render() {
		return (
			<div className="main__container">
				<SearchName
					searchName={this.state.filters.searchName}
					handlerInputSearch={this.handlerInputSearch}
				/>
				{this.state.pokemonsData.length === 0 ? (
					<p>Los pokemons estan en camino ...</p>
				) : (
					<Pokemon
						searchName={this.state.filters.searchName}
						pokemonsData={this.state.pokemonsData}
					/>
				)}
			</div>
		);
	}
}

export default App;
