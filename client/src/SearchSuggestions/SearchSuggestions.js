import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchSuggestions.css';

const SearchSuggestions = (props) => {
	const { searchTerm } = props;
	const [data, setData] = useState([]);

	useEffect(() => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ prefix: searchTerm }),
		};

		const fetchData = async () => {
			try {
				const response = await fetch('http://127.0.0.1:5000/autocomplete', options);
				let new_data = await response.json();
				setData([...new_data.response]);
			} catch (err) {}
		};

		if (searchTerm.length >= 1) {
			fetchData();
		}
	}, [searchTerm]);

	if (data.length > 0) {
		console.log('There are results.');
		console.log(data);
		let searchArr = data.map((name) => (
			<Link to={`/details/${encodeURIComponent(name)}`}>
				<li>{name}</li>
			</Link>
		));

		console.log(searchArr);

		return (
			<div className="SearchResults" onClick={props.onClick}>
				<ul>{searchArr}</ul>
			</div>
		);
	} else {
		console.log(`No matching names`);
		return <div></div>;
	}
};

export default SearchSuggestions;
