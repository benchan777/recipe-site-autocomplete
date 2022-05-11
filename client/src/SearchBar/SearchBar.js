import { React, useState } from 'react';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';
import './SearchBar.css';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');

	let updateSearchTerm = (e) => {
		var searchTerm = e.target.value;
		setSearchTerm(searchTerm);
	};

	const showSearchResults = () => {
		setSearchTerm('');
		document.getElementById('SearchResults').style.display = 'block';
	};

	const clearSearchbar = () => {
		setSearchTerm('');
	};

	return (
		<div className="SearchBar">
			<form>
				<input
					id="TextField"
					onChange={updateSearchTerm}
					onClick={showSearchResults}
					value={searchTerm}
					placeholder="Search database"
				></input>
			</form>
			<SearchSuggestions searchTerm={searchTerm} onClick={clearSearchbar} />
		</div>
	);
};

export default SearchBar;
