import { React } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import './SearchSuggestions.css';

const RECIPE_SEARCH_QUERY = gql`
	query searchSuggestion($terms: String!) {
		searchRecipes(searchTerm: $terms) {
			name
		}
	}
`;

const SearchSuggestions = (props) => {
	const { searchTerm } = props;

	const { data, loading, error } = useQuery(RECIPE_SEARCH_QUERY, {
		variables: {
			terms: searchTerm,
		},
	});

	if (loading) return '';
	if (error) {
		console.log(error);
		return <pre>{error.message}</pre>;
	}

	if (data.searchRecipes.length > 0) {
		console.log(data.searchRecipes);

		let searchArr = data.searchRecipes.map(({ name }) => (
			<Link to={`/details/${encodeURIComponent(name)}`}>
				<li>{name}</li>
			</Link>
		));

		return (
			<div className="SearchResults" onClick={props.onClick}>
				<ul>{searchArr}</ul>
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default SearchSuggestions;
