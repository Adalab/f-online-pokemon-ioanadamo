import React from 'react';
import Pokelist from './Pokelist';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
	render() {
		const { pokemonsData, searchName } = this.props;

		let pokemons = pokemonsData.map(item => {
			return {
				name: item.forms[0].name,
				types: item.types.map(item => item.type.name),
				image: item.sprites.front_default,
				id: item.id
			};
		});

		return (
			<ul className="container">
				{pokemons

					.filter(pokemon =>
						pokemon.name.toUpperCase().includes(searchName.toUpperCase())
					)
					.sort((a, b) => {
						if (a.id < b.id) {
							return -1;
						}
					})
					.map(pokemon => (
						<li className="container__list" key={pokemon.id}>
							<Pokelist pokemon={pokemon} />
						</li>
					))}
			</ul>
		);
	}
}
Pokemon.propTypes = {
	types: PropTypes.string
};
export default Pokemon;
