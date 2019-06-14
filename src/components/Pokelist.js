import React from 'react';
import PropTypes from 'prop-types';

class Pokelist extends React.Component {
	render() {
		const { types } = this.props;
		return (
			<ul className="container__powers-list">
				{types.map((type, ind) => (
					<li key={ind}>{type}</li>
				))}
			</ul>
		);
	}
}
Pokelist.propTypes = {
	types: PropTypes.array
};
export default Pokelist;
