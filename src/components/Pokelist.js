import React from 'react';
import PropTypes from 'prop-types';

class Pokelist extends React.Component {
	render() {
		const { pokemon } = this.props;
		return (
			<React.Fragment>
				<img
					className="image__pokemon"
					src={pokemon.image}
					alt={pokemon.name}
				/>

				<p className="id__pokemon">ID / {pokemon.id}</p>

				<div className="container__name-and-powers">
					<h1 className="title__card">{pokemon.name}</h1>
					<ul className="container__powers-list">
						{pokemon.types.map((type, ind) => (
							<li key={ind}>{type}</li>
						))}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}
Pokelist.propTypes = {
	types: PropTypes.array
};
export default Pokelist;
