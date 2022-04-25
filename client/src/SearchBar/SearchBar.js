import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';
import './SearchBar.css';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');

	let inputHandler = (e) => {
		var lowercase = e.target.value.toLowerCase();
		setSearchTerm(lowercase);
	};

	const clearSearchbar = () => {
		setSearchTerm('');
	};

	return (
		<div className="SearchBar">
			<TextField
				id="TextField"
				onChange={inputHandler}
				value={searchTerm}
				placeholder="Search database"
			/>
			<SearchSuggestions searchTerm={searchTerm} onClick={clearSearchbar} />
		</div>
	);
};

export default SearchBar;
