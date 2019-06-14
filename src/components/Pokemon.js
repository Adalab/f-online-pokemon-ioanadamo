import React from 'react';
import Pokelist from './Pokelist';
import PropTypes from 'prop-types';
import SearchName from './SearchName';

class Pokemon extends React.Component {
	render() {
		const { pokemon, searchName } = this.props;
		return (
			<ul className="container">
				{pokemon
					.filter(pokemon =>
						pokemon.name.toUpperCase().includes(searchName.toUpperCase())
					)
					.map(item => {
						return (
							<li className="container__list" key={item.id}>
								<img src={item.url} alt={item.name} />
								<h1 className="title__card">{item.name}</h1>
								<Pokelist types={item.types} />
							</li>
						);
					})}
			</ul>
		);
	}
}
Pokemon.propTypes = {
	types: PropTypes.string
};
export default Pokemon;
