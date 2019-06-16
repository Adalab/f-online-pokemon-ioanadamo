import React from 'react';
import PropTypes from 'prop-types';

class Pokelist extends React.Component {
	render() {
		const { pokemon } = this.props;
		return (
			<div>
				<div>
					  
					<img src={pokemon.image} alt={pokemon.name} />
					                <h1 className="title__card">{pokemon.name}</h1>
				</div>
				<ul className="container__powers-list">
					{pokemon.types.map((type, ind) => (
						<li key={ind}>{type}</li>
					))}
				</ul>
			</div>
		);
	}
}
Pokelist.propTypes = {
	types: PropTypes.array
};
export default Pokelist;
