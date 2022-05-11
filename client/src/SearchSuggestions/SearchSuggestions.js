import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchSuggestions.css';

const SearchSuggestions = (props) => {
	const { searchTerm } = props;
	const [data, setData] = useState([]);

	const clearSearchbar = () => {
		// Clear searchbar and hide search results div
		let searchBarInput = document.getElementById('TextField');
		searchBarInput.value = '';
		document.getElementById('SearchResults').style.display = 'none';
	};

	useEffect(() => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ prefix: searchTerm }),
		};

		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://recipe-site-autocomplete-api.main.benchan.tech/autocomplete',
					options
				);
				let new_data = await response.json();
				setData([...new_data.response]);
			} catch (err) {}
		};

		if (searchTerm.length >= 1) {
			fetchData();
		}
	}, [searchTerm]);

	if (searchTerm === '') {
		// SearchBar.js sets input to empty, return empty searchResults div
		return <div id="SearchResults"></div>;
	}

	if (data.length > 0) {
		let searchArr = data.map((name) => (
			<Link to={`/details/${encodeURIComponent(name)}`}>
				<li>{name}</li>
			</Link>
		));

		return (
			<div className="SearchResults" id="SearchResults" onClick={clearSearchbar}>
				<ul>{searchArr}</ul>
			</div>
		);
	} else {
		// No matching results
		return <div id="SearchResults"></div>;
	}
};

export default SearchSuggestions;
