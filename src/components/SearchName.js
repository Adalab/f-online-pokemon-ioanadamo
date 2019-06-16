import React from 'react';

class SearchName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { searchName, handlerInputSearch } = this.props;
		return (
			<div>
				<form action="">
					<label htmlFor="searchName" />
					<input
						className="input__search"
						value={searchName}
						onChange={handlerInputSearch}
						type="text"
						name="searchName"
						placeholder="Filtra Pokemons por Nombre"
						id="searchName"
					/>
				</form>
			</div>
		);
	}
}

export default SearchName;
